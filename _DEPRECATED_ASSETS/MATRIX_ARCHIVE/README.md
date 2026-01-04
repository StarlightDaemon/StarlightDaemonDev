# Matrix & Digital Rain Archive

A collection of CSS-only effects to create "Digital Rain", "Binary Streams", and "Glitch" aesthetics.

## 📂 Contents
*   **`matrix_tools.css`**: The core library.
*   **`matrix_demo.html`**: Visual examples.

## 🐇 Follow the White Rabbit

1.  Link `matrix_tools.css`.
2.  Use the classes:

| Class | Usage |
| :--- | :--- |
| `.matrix-rain` | Container for falling text columns. |
| `.m-col` | Individual falling column. Add `.fast`, `.med`, or `.slow` for variety. |
| `.dense-matrix` | Tighter packing for backgrounds. |
| `.binary-count` | Automatically cycling 0s and 1s (pseudo-element). |
| `.glitch-text` | Cyberpunk text distortion. Must define `data-text="SAME TEXT"`. |

## 🔧 Customization
Change `--matrix-color` in the CSS root to swap from Classic Green to Red (Sith) or Blue (Network).
