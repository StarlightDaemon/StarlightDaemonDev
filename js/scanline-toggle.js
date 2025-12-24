// Scanline Effect Toggle

// Initialize scanline effect on page load
document.addEventListener('DOMContentLoaded', () => {
    initScanlineToggle();
});

function initScanlineToggle() {
    const toggleBtn = document.getElementById('toggleSidebar');
    const togglePanel = document.getElementById('togglePanel');
    const effectBtns = document.querySelectorAll('.effect-option');

    // Load saved preference or default to matrix
    const savedEffect = localStorage.getItem('scanlineEffect') || 'matrix';
    applyScanlineEffect(savedEffect);

    // Update active button
    effectBtns.forEach(btn => {
        if (btn.getAttribute('data-effect') === savedEffect) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Toggle panel visibility
    toggleBtn.addEventListener('click', () => {
        togglePanel.classList.toggle('active');
    });

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.scanline-toggle')) {
            togglePanel.classList.remove('active');
        }
    });

    // Effect option click handlers
    effectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const effect = btn.getAttribute('data-effect');

            // Update active state
            effectBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Apply effect
            applyScanlineEffect(effect);

            // Save preference
            localStorage.setItem('scanlineEffect', effect);
        });
    });

    // Brightness controls
    const brightnessBtn = document.querySelectorAll('.brightness-option');
    const savedBrightness = localStorage.getItem('backgroundBrightness') || 'default';
    applyBrightness(savedBrightness);

    // Update active brightness button
    brightnessBtn.forEach(btn => {
        if (btn.getAttribute('data-brightness') === savedBrightness) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Brightness option click handlers
    brightnessBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const brightness = btn.getAttribute('data-brightness');

            // Update active state
            brightnessBtn.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Apply brightness
            applyBrightness(brightness);

            // Save preference
            localStorage.setItem('backgroundBrightness', brightness);
        });
    });
}

function applyScanlineEffect(effect) {
    document.body.setAttribute('data-scanline', effect);
}

function applyBrightness(brightness) {
    document.body.setAttribute('data-brightness', brightness);
}
