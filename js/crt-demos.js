// CRT Demos Interactive Toggler

// Effect configurations
const effects = {
    subtle: {
        title: 'SUBTLE SCANLINES',
        desc: 'Very light, minimal distraction. Best for readability with just a hint of CRT authenticity.',
        specs: ['▪ Opacity: 0.02', '▪ Spacing: 4px', '▪ Effect: Minimal']
    },
    classic: {
        title: 'CLASSIC CRT SCANLINES',
        desc: 'Medium visibility - Authentic 1990s monitor feel with clearly visible scanlines and subtle flicker. Balanced between authenticity and readability.',
        specs: ['▪ Opacity: 0.15', '▪ Spacing: 3px', '▪ Effect: Medium + Flicker']
    },
    heavy: {
        title: 'HEAVY PHOSPHOR SCANLINES',
        desc: 'Prominent visibility - Very visible lines with strong CRT authenticity. Maximum vintage monitor feel.',
        specs: ['▪ Opacity: 0.30', '▪ Spacing: 2px', '▪ Effect: Heavy']
    },
    rgb: {
        title: 'RGB SHADOW MASK',
        desc: 'Advanced CRT effect - Scanlines with subtle chromatic elements. Authentic to real CRT monitors.',
        specs: ['▪ Scanlines + RGB', '▪ Chromatic hints', '▪ Effect: Advanced']
    },
    matrix: {
        title: 'MATRIX THICK SCANLINES',
        desc: 'Thick visible scanlines inspired by The Matrix CRT monitors. Bold horizontal lines with significant presence - very authentic old-school CRT feel.',
        specs: ['▪ Line Width: 2px', '▪ Spacing: 4px', '▪ Opacity: 0.40']
    },
    ultra: {
        title: 'ULTRA THICK SCANLINES',
        desc: 'Very thick scanlines - Maximum CRT authenticity with extremely prominent horizontal bars. Highly visible vintage monitor effect.',
        specs: ['▪ Line Width: 3px', '▪ Spacing: 5px', '▪ Opacity: 0.50']
    },
    mega: {
        title: 'MEGA THICK SCANLINES',
        desc: 'Extremely thick scanlines - Absolute maximum CRT bar visibility. Massively prominent horizontal lines dominate the screen.',
        specs: ['▪ Line Width: 4px', '▪ Spacing: 6px', '▪ Opacity: 0.60']
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial effect
    document.body.setAttribute('data-scanline', 'matrix');

    // Add click handlers to all effect buttons
    const buttons = document.querySelectorAll('.effect-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const effect = btn.getAttribute('data-effect');
            applyEffect(effect);

            // Update active button
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});

// Apply scanline effect
function applyEffect(effectName) {
    const config = effects[effectName];
    if (!config) return;

    // Update data attribute for CSS
    document.body.setAttribute('data-scanline', effectName);

    // Update info display
    document.getElementById('effectTitle').textContent = config.title;
    document.getElementById('effectDesc').textContent = config.desc;

    // Update specs
    const specsContainer = document.getElementById('effectSpecs');
    specsContainer.innerHTML = config.specs.map(spec =>
        `<span>${spec}</span>`
    ).join('');
}
