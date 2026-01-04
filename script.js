/**
 * StarlightDaemon Portfolio - Interactive Features
 */

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
'> PROJECTS: 3 ACTIVE',
    '> SYSTEMS: ONLINE',
    '> GITHUB: CONNECTED',
    '> READY_'
    ];

let currentIndex = 0;
const terminalOutput = document.getElementById('terminalOutput');

if (!terminalOutput) return;

function rotateCommand() {
    // Fade out current command
    terminalOutput.style.opacity = '0';

    setTimeout(() => {
        // Update command
        terminalOutput.innerHTML = `<div class="terminal-line">${commands[currentIndex]}</div>`;

        // Fade in new command
        terminalOutput.style.opacity = '1';

        // Move to next command
        currentIndex = (currentIndex + 1) % commands.length;
    }, 300);
}

// Initial command
terminalOutput.innerHTML = `<div class="terminal-line">${commands[currentIndex]}</div>`;
currentIndex++;

// Rotate every 3 seconds
setInterval(rotateCommand, 3000);
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
