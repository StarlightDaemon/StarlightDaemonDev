# Afterglows Import Notes

**Source:** StarlightDaemon Portfolio Refinement (Jan 2026)
**Purpose:** Archiving experimental layouts for future reuse in `Afterglows` library.

## 📂 File: `skills_concepts_v1_v9.html`
Contains 9 distinct layout variations for a "Skills & Technologies" section.

### Layout Manifest
1.  **V1 (Grid):** The original production baseline. Standard 4-column cards.
2.  **V2 (Split Stack):** Two large landscape cards ("Dev Stack" vs "Ops Stack"). Good for generalist resumes.
3.  **V3 (Unified Window):** Monolithic card mimicking a single OS window (`skills.exe`). Features generic "traffic light" window controls.
4.  **V4 (Boot Log):** **[High Potential]** Retro terminal boot sequence. Text-only, staggered CSS animations.
5.  **V5 (Folder Tabs):** Interactive JS tabs. Skeuomorphic folder look. Compact vertical space.
6.  **V6 (Bento Classic):** Early asymmetrical grid attempt.
7.  **V7 (System Monitor):** **[High Potential]** Data-heavy visualization. Skills presented as CPU/RAM usage with segmented health bars (`[|||||...]`).
8.  **V8 (IDE Workspace):** Mimics VS Code interface. Sidebar file tree + syntax highlighted code view.
9.  **V9 (Pipeline Flow):** Horizontal Storytelling. Source -> Build -> Deploy with CSS arrows.

---

## 📂 File: `bento_concepts_a_c.html`
Contains 3 rejected but high-fidelity "Bento Grid" variations. (Variation D was selected for production).

### Variation A: Modern Minimalist
*   **Style:** Apple/Vercel aesthetic. Clean lines, whitespace, sans-serif typography (`Inter`).
*   **Use Case:** Corporate or white-label portfolio templates.

### Variation B: System Monitor (Refined V7)
*   **Style:** Technical Dashboard. "Dark Mode" console.
*   **Features:**
    *   Segmented health bars.
    *   Blinking status LEDs (Green/Amber CSS animations).
    *   Monospace headers (`CPU0_CORE`).

### Variation C: Future Glass
*   **Style:** Cyberpunk / Glassmorphism.
*   **Features:**
    *   `backdrop-filter: blur()`.
    *   Translucent backgrounds.
    *   Radial gradient glow on hover.
    *   Neon accent borders.

## Css Integration
All prototypes rely on `styles.css` variables (`--accent-primary`, `--bg-card`). When importing to Afterglows, ensure the local `variables.css` matches these tokens or define shims.
