# Changelog

All notable changes to the StarlightDaemon portfolio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
- **Card Styling**: Updated project and skill cards to "Almost Black" (#050505) for unified premium aesthetic

### Removed
- **Scanlines Effect**: Deprecated feature removed from settings and codebase
- **Stargate Terminal Widget**: Removed from header (still available at stargate.html)
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
