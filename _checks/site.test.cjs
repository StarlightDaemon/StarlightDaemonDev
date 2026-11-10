const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const { readFileSync, readdirSync, statSync } = require('node:fs');
const { dirname, join, relative, resolve, sep } = require('node:path');
const { test } = require('node:test');

const root = resolve(__dirname, '..');
const pages = ['index.html', '404.html', 'homelab.html'];

function localFile(reference, from) {
    const clean = reference.split(/[?#]/)[0];
    if (!clean || /^(?:[a-z]+:|\/\/)/i.test(clean)) return null;
    return resolve(clean.startsWith('/') ? root : dirname(from), `.${clean.startsWith('/') ? '' : '/'}${clean}`);
}

function assertExactFile(file) {
    const path = relative(root, file);
    assert.ok(!path.startsWith('..'), `Reference escapes site root: ${file}`);
    let directory = root;
    for (const part of path.split(sep)) {
        assert.ok(readdirSync(directory).includes(part), `Missing or wrong-case asset: ${path}`);
        directory = join(directory, part);
    }
    assert.ok(statSync(file).isFile(), `Expected file: ${path}`);
}

for (const page of pages) {
    const file = join(root, page);
    const html = readFileSync(file, 'utf8');
    test(`${page}: local assets and links resolve with exact filename case`, () => {
        for (const match of html.matchAll(/\b(?:src|href|srcset)="([^"]+)"/g)) {
            const target = localFile(match[1], file);
            if (target) assertExactFile(target === root ? join(root, 'index.html') : target);
        }
    });
    test(`${page}: stylesheet integrity matches the actual bytes`, () => {
        for (const match of html.matchAll(/<link\b[^>]*>/g)) {
            const integrity = match[0].match(/integrity="sha384-([^"]+)"/);
            if (!integrity) continue;
            const href = match[0].match(/href="([^"]+)"/)[1];
            const hash = createHash('sha384').update(readFileSync(localFile(href, file))).digest('base64');
            assert.equal(hash, integrity[1], `${page}: stale integrity hash for ${href}`);
        }
    });
}

for (const stylesheet of ['styles.css', 'css/theme-toggle.css', 'css/fonts.css']) {
    test(`${stylesheet}: local resources resolve with exact filename case`, () => {
        const file = join(root, stylesheet);
        for (const match of readFileSync(file, 'utf8').matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g)) {
            const target = localFile(match[1], file);
            if (target) assertExactFile(target);
        }
    });
}
