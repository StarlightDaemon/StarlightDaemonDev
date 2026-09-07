# Current State

**Branch:** main
**Deployment:** Live at https://www.starlightdaemon.dev/ via GitHub Pages

---

## Project

StarlightDaemonDev is the canonical production repository for the starlightdaemon.dev portfolio site. Static site hosted on GitHub Pages with a custom domain. Contains the live pages, shared assets, and local development tooling.

**Status:** Active — ongoing refinement.

---

## Confirmed Current State

- Live site is published from the repository root via GitHub Pages (CNAME configured).
- Core pages: `index.html` (portfolio), `homelab.html` (0-second meta-refresh redirect stub to homelab.starlightdaemon.dev). `stargate.html` was removed from this repository (commit `d4fba2f`) and extracted to a separate standalone repository.
- V5.4 header layout active (left-aligned, IBM Plex Mono default font, green accent border).
- Font switcher: 4 retro terminal fonts available (IBM Plex Mono, VT323, Space Mono, Fira Code), self-hosted as 44 `.woff2` files under `assets/fonts/` — Google Fonts CDN dependency removed (commit `c7bc6b4`, 2026-06-13).
- Theme system: color-coded buttons with phosphor color previews.
- Project cards: refactored to Badge Block style with strict grid layout. Active cards include Native Taskbar Media Controller, Audiobookshelf Now Playing, Hide RDP Connection Bar, Fujin, and others.
- Content Security Policy (`default-src 'self'`, no `unsafe-inline`) enforced on both pages via meta tag (commit `956837e`); SRI hash on `css/fonts.css` link verified in-sync (commit `bd36e58`).
- Accessibility: skip-nav link, `:focus-visible` ring, `prefers-reduced-motion` support, ARIA labels on interactive controls (commit `3e37707`).
- SEO: canonical link, Open Graph tags, `robots.txt`, `sitemap.xml` present (commit `b4724e2`).
- Pre-launch readiness pass added a branded `404.html`, dedicated social preview, favicon/touch icon support, stronger meta-delivered CSP directives, and corrected display-settings semantics. The existing Pages/Jekyll pass-through remains intentional; deployment is operator-controlled and unverified for these working-tree changes.
- Logo converted to WebP with PNG fallback, explicit dimensions set (commit `78d4b0b`).
- CSS: approximately 29% dead-selector reduction across two pruning passes (commits `a2bb4f5`, `5fc5cce`); styles cache bumped to v1.0.8.
- `afterglows_staging/` and `tests/` are excluded from Pages deploy via `.gitignore`/deploy config (commit `df03a1c`).
- `.gitattributes` present for consistent line endings (commit `cdca54d`).
- Afterglows and Stargate are both in their own standalone repositories; this repo links to Afterglows but does not host it.
- 2026-06-23 repository audit complete (instrument v4.3, audited at commit `5fc5cce`). Findings F1c/F1d/F1e/F3/F4/F5/F6/F7/F8/F9/F12/F14 addressed in maintenance sweep (commit `69148fc`, 2026-06-24). Findings F1a/F1b and the CURRENT_STATE.md instance of F1c addressed in this update. Finding F10 (missing OFL license file for self-hosted fonts) addressed in this update via `assets/fonts/OFL.txt`.
- Migration audit (WSL→macOS) completed 2026-06-07; all findings (P1–P3) remediated. OL-002 closed.

## In Progress

- None. See OL-001.

## Not Yet Done

- No active blocking work identified.

## Known Constraints

- `afterglows_staging/` is retained non-production reference material — not the live Afterglows site.
- `concepts/` and `ideas/` are tracked architectural thoughts, not production code.
- `archive/` holds retired or pre-RAIDEN historical material.
