# Matrix & Digital Rain FX Library

This folder contains `matrix_tools.css`, a standalone CSS library for creating Matrix-style visual effects.

## Usage

Link the stylesheet in your HTML:
```html
<link rel="stylesheet" href="matrix_tools.css">
```

## Features

### 1. Classic Digital Rain
Creates falling columns of text.
- **Container**: `.matrix-rain`
- **Columns**: `.m-col`
- **Speed Modifiers**: `.fast`, `.med`, `.slow`

### 2. Dense / Heavy Matrix
A denser variation of the matrix effect.
- **Container**: `.dense-matrix`
- **Columns**: `.dense-col`

### 3. Binary Counter
Animated binary numbers flipping between 0 and 1.
- **Class**: `.binary-count` (automatically adds animation via `::after` pseudo-element)

### 4. Glitch Text
Applies a cyberpunk glitch effect to text.
- **Class**: `.glitch-text`
- **Attribute**: `data-text` (Must match the text content for the effect to work)
- **Example**: `<div class="glitch-text" data-text="SYSTEM FAILURE">SYSTEM FAILURE</div>`

### 5. Utility
- **Terminal Box**: `.terminal-box` - A styled container with a green border and semi-transparent background.
