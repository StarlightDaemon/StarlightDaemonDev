// Theme Brightness Toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleTheme');
    const togglePanel = document.getElementById('themePanel');
    const themeOptions = document.querySelectorAll('.theme-option');

    // Load saved theme or default to 'p1-matrix' (classic Matrix green)
    const savedTheme = localStorage.getItem('theme') || 'p1-matrix';
    document.body.dataset.theme = savedTheme;

    // Update active button
    themeOptions.forEach(option => {
        if (option.dataset.theme === savedTheme) {
            option.classList.add('active');
        }
    });

    // Font Management
    const fontBtns = document.querySelectorAll('.font-options .theme-btn');
    const savedFont = localStorage.getItem('site-font') || 'ibm';

    // Apply saved font
    document.documentElement.setAttribute('data-font', savedFont);
    updateActiveButton(fontBtns, savedFont, 'data-font');

    fontBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const font = btn.getAttribute('data-font');
            document.documentElement.setAttribute('data-font', font);
            localStorage.setItem('site-font', font);
            updateActiveButton(fontBtns, font, 'data-font');
            playClickSound();
        });
    });

    // Helper to update active state
    function updateActiveButton(buttons, value, dataAttr) {
        buttons.forEach(btn => {
            if (btn.getAttribute(dataAttr) === value) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Scanline Toggle panel visibility
    toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        togglePanel.classList.toggle('active');
    });

    // Close panel when clicking outside
    document.addEventListener('click', function (e) {
        if (!togglePanel.contains(e.target) && !toggleBtn.contains(e.target)) {
            togglePanel.classList.remove('active');
        }
    });

    // Theme selection
    themeOptions.forEach(option => {
        option.addEventListener('click', function () {
            const theme = this.dataset.theme;

            // Update body attribute
            document.body.dataset.theme = theme;

            // Save to localStorage
            localStorage.setItem('theme', theme);

            // Update active state
            themeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
