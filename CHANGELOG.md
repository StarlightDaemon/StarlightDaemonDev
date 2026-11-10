# Changelog

All notable changes to the StarlightDaemon portfolio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Dependency-free regression checks for display settings, local resource paths, and stylesheet integrity.
- A PowerShell preview helper alongside the Bash helper, using Python's localhost-bound HTTP server.
- Custom `404.html` recovery page matching the portfolio design.
- SVG favicon, Apple touch icon, and a dedicated 1200×630 social preview image.
- `_config.yml` excluding repository documentation and tooling from the published site.

### Changed
- Preview instructions now preserve the production CSP and use manual refresh without globally installed npm tooling.
- Project cards expand to fit their content and selected font; narrow layouts and settings panels stay within the viewport.
- Display preferences tolerate blocked browser storage and reject obsolete saved values.
- Completed reduced-motion handling for smooth scrolling and display-setting transitions.
- Strengthened document-level CSP directives supported by meta delivery and removed the unsupported `frame-ancestors` meta directive.
- Improved Open Graph/Twitter metadata and updated the sitemap modification date.
- The verification workflow now runs on pushes to `main` as well as pull requests, and also runs the `_checks/` suite on Linux to catch filename-case errors.
- Machine-specific paths in the local RAIDEN overlay are replaced with placeholders; the real paths live in a gitignored `MACHINE.md`.
- Replaced incomplete ARIA radio semantics in display settings with toggle-button semantics and added Escape-key dismissal.

---

## [1.0.0] - 2026-06-24

### Refactored
- **Project Cards**: Complete overhaul of CSS architecture.
    - Implemented "Badge Block" subtitle style (Option 3).
    - Enforced strict grid layout with standard 1.5rem padding across all breakpoints (fixed 4K text truncation).
    - Introduced `.project-top` and `.header-row` structural classes for consistent spacing.
    - Isolated card themes variables (`--bg-card: #161616`) to maintain "Modern Dark" aesthetic regardless of global theme.
- **Skills Section**:
    - Replaced inline styles with new `.infra-grid` utility class.
- **Codebase Hygiene**:
    - Purged legacy "Pulse" animations and redundant comments from stylesheet.

### Added
- **Font Switcher**: Global font selection system with 4 retro terminal fonts (IBM Plex Mono, VT323, Space Mono, Fira Code)
- **Color-Coded Theme Buttons**: Theme buttons now preview their phosphor colors
- **V5.4 Header Layout**: Left-aligned "Strong Underline" header with solid black background and 3px green accent border
- **IBM Plex Mono**: Set as default consistent font across all devices
- **VT323 Size Adjustment**: Automatic font scaling (1.4em) for visual consistency

### Changed
- **Header Layout**: Migrated from centered to left-aligned V5.4 layout
- **Settings Panel**: Added scrolling support (max-height: 80vh) for expanded options
- **Terminal Widget**: Removed Stargate terminal from header (archived)
- **Spacing**: Increased gap between header and content (space-3xl)
- **Card Styling**: Updated project and skill cards to "Almost Black" (#161616) for unified premium aesthetic

### Removed
- **Scanlines Effect**: Deprecated feature removed from settings and codebase
- **Stargate Terminal Widget**: Removed from header (archived to separate repository)
- **Hero Section CTA Buttons**: Cleaned up unused UI elements

### Fixed
- **Settings Panel Visibility**: Corrected element IDs and classes to match JavaScript selectors
- **Font Button Styling**: Unified appearance with theme buttons
- **VT323 Font Size**: Increased multiplier to match visual size of other fonts

---

## Earlier Versions

For commit history prior to this changelog, see `git log`.

---

## Version Numbering

This project uses [Semantic Versioning](https://semver.org/):
- **MAJOR**: Incompatible visual/structural overhauls
- **MINOR**: New features (themes, fonts, layouts)
- **PATCH**: Bug fixes and refinements
