# Current State

**Last updated:** 2026-06-07
**Branch:** main
**Deployment:** Live at https://www.starlightdaemon.dev/ via GitHub Pages

---

## Project

StarlightDaemonDev is the canonical production repository for the starlightdaemon.dev portfolio site. Static site hosted on GitHub Pages with a custom domain. Contains the live pages, shared assets, and local development tooling.

**Status:** Active — ongoing refinement.

---

## Confirmed Current State

- Live site is published from the repository root via GitHub Pages (CNAME configured).
- Core pages: `index.html` (portfolio), `stargate.html` (archived Stargate terminal experience), `homelab.html` (tile linking to homelab subdomain).
- V5.4 header layout active (left-aligned, IBM Plex Mono default font, green accent border).
- Font switcher: 4 retro terminal fonts available (IBM Plex Mono, VT323, Space Mono, Fira Code).
- Theme system: color-coded buttons with phosphor color previews.
- Project cards: refactored to Badge Block style with strict grid layout.
- Afterglows and Stargate are both in their own standalone repos; this repo links to them but does not host them.
- RAIDEN Instance installed at Edict v0.6.1.
- WSL→macOS migration fully remediated (commit d4789e2, 2026-06-07): CRLF endings fixed, all stale `/mnt/e/` paths updated to `/Users/dante/Citadel/`.

## In Progress

- Unreleased changelog section: project card CSS refactor, skills section infra-grid, font switcher — changes committed but not version-tagged.

## Not Yet Done

- No active blocking work identified.

## Known Constraints

- `afterglows_staging/` is retained non-production reference material — not the live Afterglows site.
- `concepts/` and `ideas/` are tracked architectural thoughts, not production code.
- `archive/` holds retired or pre-RAIDEN historical material.
