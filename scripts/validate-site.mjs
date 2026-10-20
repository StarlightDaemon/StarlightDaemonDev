// Dependency-free checks for the existing GitHub Pages source tree.
// Static regression checks, not a browser or WCAG conformance audit.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const origin = 'https://www.starlightdaemon.dev';
const errors = [];

function requireCheck(condition, message) {
    if (!condition) errors.push(message);
}

function read(relativePath) {
    const fullPath = path.join(root, relativePath);
    if (!fs.existsSync(fullPath)) {
        errors.push('Missing file: ' + relativePath);
        return '';
    }
    return fs.readFileSync(fullPath, 'utf8');
}

function attribute(tag, name) {
    for (const match of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
        if (match[1].toLowerCase() === name) return match[2] ?? match[3];
    }
    return null;
}

for (const file of ['index.html', '404.html', 'homelab.html']) {
    const html = read(file);
    requireCheck(/<html\b[^>]*\blang=["']en["']/i.test(html), file + ': missing document language');
    requireCheck(/<title>[^<]+<\/title>/i.test(html), file + ': missing page title');

    if (file !== 'homelab.html') {
        requireCheck(/<main\b/i.test(html), file + ': missing main landmark');
        requireCheck(/<a\b[^>]*href=["']#main-content["']/i.test(html), file + ': missing skip link');
    }

    for (const img of html.match(/<img\b[^>]*>/gi) ?? []) {
        requireCheck(attribute(img, 'alt') !== null, file + ': image missing alt attribute');
    }

    // Check locally referenced assets without following external links.
    for (const tag of html.match(/<(?:a|img|link|script|source)\b[^>]*>/gi) ?? []) {
        for (const name of ['href', 'src']) {
            const value = attribute(tag, name);
            if (!value || value.startsWith('#') || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(value)) continue;
            const clean = value.split(/[?#]/, 1)[0];
            if (!clean) continue;
            const target = path.resolve(root, clean.startsWith('/') ? clean.slice(1) : clean);
            const relative = path.relative(root, target);
            const safe = !relative.startsWith('..') && !path.isAbsolute(relative);
            requireCheck(safe, file + ': reference escapes site root: ' + value);
            if (safe) requireCheck(fs.existsSync(target), file + ': missing local asset ' + value);
        }
    }
}

const home = read('index.html');
requireCheck(/<meta\b[^>]*name=["']description["'][^>]*content=["'][^"']+["']/i.test(home), 'index.html: missing meta description');
requireCheck(/<meta\b[^>]*property=["']og:image["']/i.test(home), 'index.html: missing social image metadata');
requireCheck(/<link\b[^>]*rel=["']icon["']/i.test(home), 'index.html: missing favicon');
requireCheck(home.includes('href="' + origin + '/"'), 'index.html: missing canonical URL');

const notFound = read('404.html');
requireCheck(/<meta\b[^>]*name=["']robots["'][^>]*content=["']noindex/i.test(notFound), '404.html: missing noindex');
requireCheck(/href=["']\/["']/.test(notFound), '404.html: missing home recovery link');

requireCheck(read('CNAME').trim() === 'www.starlightdaemon.dev', 'CNAME: unexpected custom domain');
requireCheck(read('robots.txt').includes('Sitemap: ' + origin + '/sitemap.xml'), 'robots.txt: incorrect sitemap declaration');
requireCheck(read('sitemap.xml').includes('<loc>' + origin + '/</loc>'), 'sitemap.xml: missing canonical homepage');

if (errors.length) {
    console.error('Portfolio site checks failed (' + errors.length + '):');
    for (const error of errors) console.error('  - ' + error);
    process.exitCode = 1;
} else {
    console.log('Portfolio site static checks passed.');
}
