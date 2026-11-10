// Display settings remain usable when browser storage is unavailable.
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleTheme');
    const togglePanel = document.getElementById('themePanel');
    const themeOptions = document.querySelectorAll('.theme-option');
    const fontBtns = document.querySelectorAll('.font-options .theme-btn');

    if (!toggleBtn || !togglePanel) return;

    function readPreference(key, buttons, dataAttr, fallback) {
        try {
            const saved = localStorage.getItem(key);
            return Array.from(buttons).some(btn => btn.getAttribute(dataAttr) === saved)
                ? saved : fallback;
        } catch {
            return fallback;
        }
    }

    function savePreference(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch {
            // The selection still applies for this page when persistence is blocked.
        }
    }

    // Load saved theme or default to 'p1-matrix' (classic Matrix green)
    const savedTheme = readPreference('theme', themeOptions, 'data-theme', 'p1-matrix');
    document.body.dataset.theme = savedTheme;

    // Helper to update active state and ARIA
    function updateActiveButton(buttons, value, dataAttr) {
        buttons.forEach(btn => {
            if (btn.getAttribute(dataAttr) === value) {
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            }
        });
    }

    updateActiveButton(themeOptions, savedTheme, 'data-theme');

    // Font Management
    const savedFont = readPreference('site-font', fontBtns, 'data-font', 'ibm');

    // Apply saved font
    document.documentElement.setAttribute('data-font', savedFont);
    updateActiveButton(fontBtns, savedFont, 'data-font');

    fontBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const font = btn.getAttribute('data-font');
            document.documentElement.setAttribute('data-font', font);
            updateActiveButton(fontBtns, font, 'data-font');
            savePreference('site-font', font);
        });
    });

    // Settings Panel visibility
    toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isExpanded = togglePanel.classList.toggle('active');
        toggleBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close panel when clicking outside
    document.addEventListener('click', function (e) {
        if (!togglePanel.contains(e.target) && !toggleBtn.contains(e.target)) {
            togglePanel.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Theme selection
    themeOptions.forEach(option => {
        option.addEventListener('click', function () {
            const theme = this.dataset.theme;

            // Update body attribute
            document.body.dataset.theme = theme;

            // Update active state
            updateActiveButton(themeOptions, theme, 'data-theme');
            savePreference('theme', theme);
        });
    });

    // Close the settings panel with Escape and return focus to its trigger.
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && togglePanel.classList.contains('active')) {
            togglePanel.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.focus();
        }
    });
});
