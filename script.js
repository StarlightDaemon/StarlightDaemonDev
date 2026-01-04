/**
 * StarlightDaemon Portfolio - Interactive Features
 */


/* --- STARGATE TERMINAL LOGIC --- */
const innerRing = document.getElementById('innerRing');
const horizon = document.getElementById('horizon');
const statusText = document.getElementById('sgStatus');
const chevrons = [1, 2, 3, 4, 5, 6, 7].map(i => document.getElementById('c' + i));

let isDialing = false;
let currentRotation = 0;

async function dialSequence() {
    if (isDialing) return;
    isDialing = true;

    // Determine mode based on active element
    // Check if we are in full mode (has status text) or mini mode
    const isFullMode = !!document.querySelector('.sg-terminal:not(.mini-mode)');

    // Reset
    horizon.className = 'event-horizon';
    chevrons.forEach(c => { if (c) c.classList.remove('locked') });

    if (statusText) statusText.innerText = "DIALING...";
    currentRotation = 0;
    innerRing.style.transform = `rotate(0deg)`;

    // Dial 7 Chevrons
    for (let i = 0; i < 7; i++) {
        // Spin Ring
        // Slower spin for mini mode? User asked for "a bit slower"
        // Let's make the spin duration dynamic
        let spinDuration = isFullMode ? 1000 : 2000; // Slower on mini
        let spinAmount = Math.floor(Math.random() * 60) + 60;

        if (i % 2 === 0) currentRotation += spinAmount;
        else currentRotation -= spinAmount;

        innerRing.style.transition = `transform ${spinDuration / 1000}s cubic-bezier(0.5, 0, 0.5, 1)`;
        innerRing.style.transform = `rotate(${currentRotation}deg)`;

        if (statusText) statusText.innerText = `ENCODING CHEVRON ${i + 1}...`;

        // Wait for spin
        await new Promise(r => setTimeout(r, spinDuration));

        // Lock Chevron
        if (chevrons[i]) chevrons[i].classList.add('locked');

        // Short pause
        await new Promise(r => setTimeout(r, isFullMode ? 200 : 500));
    }

    // Engage
    if (statusText) statusText.innerText = "WORMHOLE ACTIVE";
    horizon.classList.add('kawoosh');

    // Hold wormhole
    await new Promise(r => setTimeout(r, 4000));

    // Shut down if mini mode to loop, or keep open if full?
    // User said "dialer automatically" for mini.
    if (!isFullMode) {
        horizon.classList.remove('kawoosh');
        horizon.classList.remove('active');
        chevrons.forEach(c => { if (c) c.classList.remove('locked') });
        isDialing = false;
        // Wait before next dialing
        setTimeout(dialSequence, 3000);
        return;
    }

    horizon.classList.remove('kawoosh');
    horizon.classList.add('active');
    isDialing = false;
}

// Auto-start if mini mode
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.sg-terminal.mini-mode')) {
        setTimeout(dialSequence, 1000);
    }
});




// Main Init
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    initSmoothScroll();

    // Intersection Observer for scroll animations
    initScrollAnimations();

    // Dynamic year in footer
    updateCopyrightYear();

    // Uptime counter
    updateUptime();

    // Terminal commands rotation
    updateTerminalCommands();
});

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards for staggered animation
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`;
        observer.observe(category);
    });
}

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
    .project-card.visible,
    .skill-category.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

/**
 * Update copyright year dynamically
 */
function updateCopyrightYear() {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace(/©\s*\d{4}/, `© ${currentYear}`);
    }
}

/**
 * Update uptime counter - days since site launch
 */
function updateUptime() {
    const launchDate = new Date('2025-12-23'); // Site launch date
    const now = new Date();
    const diffTime = Math.abs(now - launchDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const uptimeElement = document.getElementById('uptime');
    if (uptimeElement) {
        uptimeElement.textContent = diffDays + 'd';
    }
}

/**
 * Terminal commands rotation
 */
/**
 * Terminal commands - Static for now
 */
function updateTerminalCommands() {
    // Static content handled in HTML
    return;
}


/**
 * Optional: Add typing effect to tagline
 * Uncomment to enable
 */
/*
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Usage:
// const tagline = document.querySelector('.tagline');
// typeWriter(tagline, 'Developer & Open Source Enthusiast');
*/
