# Concepts Directory

This directory contains experimental features and design explorations for the StarlightDaemon portfolio.

## Contents

### Header Terminal Experiments
**Location:** `header-terminal/`

Explorations of different header/terminal UI concepts:
- **header_mockups.html** (27KB) - Various header layout mockups
- **stargate_lcd_retro.html** (9KB) - Retro LCD-style Stargate terminal
- **README.md** - Documentation of terminal experiments

**Status:** Experimental - Not in production

**Purpose:** Testing different approaches for the terminal command display in the upper-right corner of the main site.

---

## Archived Features

### Scanline Effects
Previously had 7 scanline CSS variants for CRT-style effects. These were removed from production as they were unused. If you need to reference them, check git history:

```bash
git show HEAD~2:css/scanline-classic.css
```

Available scanline variants in git history:
- `scanline-classic` - Traditional CRT scanlines
- `scanline-heavy` - Thick prominent scanlines
- `scanline-matrix` - Matrix-style green phosphor
- `scanline-mega` - Extra pronounced effect
- `scanline-rgb` - RGB color separation
- `scanline-subtle` - Minimal scanline overlay
- `scanline-ultra` - Maximum retro effect

---

## How to Use This Directory

1. **Experiment Freely** - This directory is gitignored (except READMEs)
2. **Document New Ideas** - Add entries to this README
3. **Prototype Features** - Test concepts before adding to production
4. **Archive Old Work** - Keep references to removed features
