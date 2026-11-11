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
- Domain routing: `www` is DNS-only to GitHub Pages. The apex is proxied by Cloudflare, where Always Use HTTPS upgrades HTTP and a redirect rule sends HTTPS apex requests to `www`, preserving path and query (verified 2026-11-10).
- Core pages: `index.html` (portfolio), `404.html` (recovery), and `homelab.html` (immediate redirect to homelab.starlightdaemon.dev).
- V5.4 header layout active (left-aligned, IBM Plex Mono default font, green accent border).
- Fonts are self-hosted under `assets/fonts/`; available choices are defined in the homepage display settings. Font licensing is recorded in `assets/fonts/OFL.txt`.
- Display settings use color-coded phosphor previews, validate saved preferences, and remain usable when browser storage is blocked. The panel scrolls within short viewports.
- Project cards retain the Badge Block style and responsive grid, growing to fit complete titles and descriptions. Portfolio entries are maintained in `index.html`.
- Content Security Policy (`default-src 'self'`, no `unsafe-inline`) is delivered via meta tags on all production pages; styled pages use SRI for `css/fonts.css`.
- Accessibility: skip-nav link, `:focus-visible` ring, `prefers-reduced-motion` support, ARIA labels on interactive controls (commit `3e37707`).
- SEO: canonical link, Open Graph tags, `robots.txt`, `sitemap.xml` present (commit `b4724e2`).
- Launch-readiness changes (`a08b44d`) and the 2026-09-19 refinement plus distribution hardening (`de53209`) are deployed. On 2026-11-10 the Pages build for `de53209` succeeded and the live site served the new asset versions. The Pages/Jekyll pass-through remains intentional.
- Logo converted to WebP with PNG fallback, explicit dimensions set (commit `78d4b0b`).
- `afterglows_staging/` and `tests/` are ignored local reference directories, absent from tracked deployment input. `_checks/` holds regression checks and uses Jekyll's underscore-directory exclusion. `_config.yml` excludes repository docs and tooling from the published site (live 404s confirmed 2026-11-10). CI (`verify-site.yml`) runs `scripts/validate-site.mjs` and `_checks/` on pushes and pull requests to `main`.
- The `protect-main` repository ruleset applies only to `main` and blocks force-push and deletion for everyone, with no bypass actors (owner and agent tokens included). Normal pushes are allowed. There are no required status checks: CI reports on every push but does not block deployment. An intentional history rewrite requires temporarily disabling the ruleset.
- Preview and verification commands are documented in `README.md`; the preview serves unchanged files on localhost through Python without reload-code injection.
- `.gitattributes` present for consistent line endings (commit `cdca54d`).
- Project-site ownership boundaries are recorded in D-001 and D-002.
- Historical audit and cleanup context is recorded in `WORK_LOG.md`; migration follow-up is recorded in OL-002.

## In Progress

- `CHANGELOG.md` [Unreleased] entries are deployed but not yet version-tagged; tagging is an operator release decision (see `GOALS.md`).

## Not Yet Done

- No active blocking work identified.

## Known Constraints

- `afterglows_staging/` is retained non-production reference material — not the live Afterglows site.
- `concepts/` and `ideas/` are tracked architectural thoughts, not production code.
- `archive/` holds retired or pre-RAIDEN historical material.
