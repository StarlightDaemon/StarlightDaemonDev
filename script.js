/**
 * StarlightDaemon Portfolio - Interactive Features
 */

document.addEventListener('DOMContentLoaded', () => {
    updateCopyrightYear();
});

function updateCopyrightYear() {
    const footer = document.querySelector('.footer p');
    if (!footer) return;
    const currentYear = new Date().getFullYear();
    for (const node of footer.childNodes) {
        if (node.nodeType === Node.TEXT_NODE && /©\s*\d{4}/.test(node.textContent)) {
            node.textContent = node.textContent.replace(/©\s*\d{4}/, `© ${currentYear}`);
            break;
        }
    }
}
