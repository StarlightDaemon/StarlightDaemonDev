const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { test } = require('node:test');
const { runInNewContext } = require('node:vm');

const source = readFileSync(join(__dirname, '../js/theme-toggle.js'), 'utf8');

// Minimal DOM boundary for exercising the real controller's error paths.
// Layout, keyboard navigation, and rendering are checked in the browser.
function element(attributes = {}) {
    const listeners = {};
    const classes = new Set();
    return {
        dataset: { theme: attributes['data-theme'] },
        getAttribute: name => attributes[name] ?? null,
        setAttribute: (name, value) => { attributes[name] = String(value); },
        addEventListener: (name, handler) => { listeners[name] = handler; },
        dispatch(name, event = {}) { listeners[name]?.call(this, event); },
        contains(target) { return target === this; },
        focus() { this.focused = true; },
        classList: {
            add: name => classes.add(name),
            remove: name => classes.delete(name),
            contains: name => classes.has(name),
            toggle(name) {
                if (classes.has(name)) { classes.delete(name); return false; }
                classes.add(name);
                return true;
            },
        },
    };
}

function setup({ saved = {}, denyRead = false, denyWrite = false, missingPanel = false } = {}) {
    const trigger = element();
    const panel = element();
    const themes = ['p1-matrix', 'p3-amber'].map(value => element({ 'data-theme': value }));
    const fonts = ['ibm', 'vt323'].map(value => element({ 'data-font': value }));
    const values = new Map(Object.entries(saved));
    const document = Object.assign(element(), {
        body: element(),
        documentElement: element(),
        getElementById: id => id === 'toggleTheme' ? trigger : missingPanel ? null : panel,
        querySelectorAll: selector => selector === '.theme-option' ? themes : fonts,
    });
    runInNewContext(source, {
        document,
        localStorage: {
            getItem(key) {
                if (denyRead) throw new Error('SecurityError');
                return values.get(key) ?? null;
            },
            setItem(key, value) {
                if (denyWrite) throw new Error('QuotaExceededError');
                values.set(key, value);
            },
        },
    });
    document.dispatch('DOMContentLoaded');
    return { document, trigger, panel, themes, fonts, values };
}

function assertSelected(buttons, index) {
    buttons.forEach((button, position) => {
        assert.equal(button.getAttribute('aria-pressed'), String(position === index));
        assert.equal(button.classList.contains('active'), position === index);
    });
}

test('restores valid theme and font selections', () => {
    const state = setup({ saved: { theme: 'p3-amber', 'site-font': 'vt323' } });
    assert.equal(state.document.body.dataset.theme, 'p3-amber');
    assert.equal(state.document.documentElement.getAttribute('data-font'), 'vt323');
    assertSelected(state.themes, 1);
    assertSelected(state.fonts, 1);
});

test('invalid stored selections fall back to usable defaults', () => {
    const state = setup({ saved: { theme: 'removed-theme', 'site-font': 'removed-font' } });
    assert.equal(state.document.body.dataset.theme, 'p1-matrix');
    assert.equal(state.document.documentElement.getAttribute('data-font'), 'ibm');
    assertSelected(state.themes, 0);
    assertSelected(state.fonts, 0);
});

test('denied storage reads do not prevent opening display settings', () => {
    const state = setup({ denyRead: true });
    state.trigger.dispatch('click', { stopPropagation() {} });
    assert.equal(state.trigger.getAttribute('aria-expanded'), 'true');
    assert.equal(state.panel.classList.contains('active'), true);
    assertSelected(state.themes, 0);
    assertSelected(state.fonts, 0);
});

for (const denyWrite of [false, true]) {
    test(`appearance and pressed state update with storage writes ${denyWrite ? 'denied' : 'allowed'}`, () => {
        const state = setup({ denyWrite });
        state.themes[1].dispatch('click');
        state.fonts[1].dispatch('click');
        assert.equal(state.document.body.dataset.theme, 'p3-amber');
        assert.equal(state.document.documentElement.getAttribute('data-font'), 'vt323');
        assertSelected(state.themes, 1);
        assertSelected(state.fonts, 1);
        if (!denyWrite) {
            assert.equal(state.values.get('theme'), 'p3-amber');
            assert.equal(state.values.get('site-font'), 'vt323');
        }
    });
}

test('Escape closes settings and returns focus to its trigger', () => {
    const state = setup();
    state.trigger.dispatch('click', { stopPropagation() {} });
    state.document.dispatch('keydown', { key: 'Escape' });
    assert.equal(state.panel.classList.contains('active'), false);
    assert.equal(state.trigger.getAttribute('aria-expanded'), 'false');
    assert.equal(state.trigger.focused, true);
});

test('outside click closes settings', () => {
    const state = setup();
    state.trigger.dispatch('click', { stopPropagation() {} });
    state.document.dispatch('click', { target: element() });
    assert.equal(state.panel.classList.contains('active'), false);
    assert.equal(state.trigger.getAttribute('aria-expanded'), 'false');
});

test('loading the controller without its panel is harmless', () => {
    assert.doesNotThrow(() => setup({ missingPanel: true }));
});
