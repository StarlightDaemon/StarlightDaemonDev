# StarlightDaemonDev

> **Canonical production repository for the StarlightDaemon website.**

This repository is the main development source for the live site. It contains the production pages, shared assets, local development helpers, and a curated set of retained non-production reference areas.

---

## 🌐 Live Site

**Canonical URL:** [https://www.starlightdaemon.dev/](https://www.starlightdaemon.dev/)

> [!NOTE]
> GitHub Pages is already configured and working for this repository. This README documents the current repository and deployment state only.

## 🏗️ Repository Layout

### Production / Live Files
The active static site footprint published to the root domain.
- `index.html` — Core page route
- `404.html` — Branded recovery page for unknown routes
- `homelab.html` — Meta-redirect to homelab.starlightdaemon.dev
- `styles.css` & `script.js` — Global styling and logic
- `css/` & `js/` — Modular feature code and theme handling
- `assets/` — Media and graphical resources
- `CNAME` — Custom domain configuration

### Support / Development
Tooling and documentation for local engineering.
- `README.md` & `CHANGELOG.md` — Core project context
- `.agent/` — Automation and workflow definitions
- `start-dev-server.sh` & `start-dev-server.ps1` — Local preview helpers
- `_checks/` — Automated regression checks (excluded from Pages by Jekyll's underscore-directory convention)
- `_config.yml` — Keeps repository docs and tooling (`README.md`, `AGENTS.md`, `CHANGELOG.md`, `concepts/`, `ideas/`, `scripts/`, preview helpers) out of the published site
- `.github/workflows/verify-site.yml` — Runs both check suites on every push and pull request to `main`

### Retained Non-Production Areas
Historical contexts, staging environments, and ongoing ideas kept for reference.
- `tests/` — Ignored local HTML experiments; automated regression checks live in `_checks/`
- `afterglows_staging/` — Draft concepts and layout iterations retained for reference only; not the live Afterglows site
- `concepts/` & `ideas/` — Tracked architectural thoughts and documentation

*(These folders are intentionally non-production. They are retained as reference material and should not be treated as the canonical live site implementation.)*

External project sites such as `Afterglows` may have their own standalone repositories and custom domains. This repository only links to those sites unless their files are explicitly present in the production root.

## 💻 Local Development

The site is a root-published static environment with no framework, package manager, or generated-output directory. GitHub Pages publishes the `main` branch repository root. The default Pages/Jekyll pass-through is retained because the site has no Jekyll-sensitive asset paths and does not need a `.nojekyll` exception; `_config.yml` only lists repository files to exclude from publishing. When adding a tracked file that is not part of the site, add it to that `exclude` list. Most day-to-day work happens directly in the root HTML, CSS, JS, and supporting asset folders.

### Prerequisites

Previewing requires **Python 3** on your PATH. No npm packages are needed.

From the repository root, start the server on Windows:

```powershell
.\start-dev-server.ps1
```

Or on macOS/Linux:

```bash
bash ./start-dev-server.sh
```

Open `http://127.0.0.1:8080` and refresh after edits. Stop with `Ctrl+C`.
Both helpers serve this repository regardless of the terminal's current directory
and bind only to localhost. They serve unchanged files: automatic-reload injection
would conflict with the production Content Security Policy.

You can also run `python -m http.server 8080 --bind 127.0.0.1` from the repository
root (`python3` on macOS/Linux). Python's server does not emulate Jekyll or custom
404 routing; open `/404.html` to preview that page directly.

### Verification

With **Node.js 18 or newer**, run the dependency-free checks:

```text
node scripts/validate-site.mjs
node --test "_checks/*.test.cjs"
```

These cover preference-storage failures, selection state, settings dismissal,
local resource paths (including filename case), and stylesheet integrity hashes.
For visual changes, also check all fonts on a narrow phone, a short landscape
viewport, and desktop; verify keyboard focus, Escape dismissal, and reduced motion.

## ✨ Current Site Features

- Responsive static portfolio published from the repository root
- Multi-section homepage covering projects, libraries, and skills
- Theme and font controls implemented through shared CSS/JS modules
- GitHub Pages deployment with a custom domain via `CNAME`

## 🛠️ Editing Guide

Most content and structure changes happen in a small number of files:

- `index.html` — Header copy, project cards, library cards, skill blocks, and outbound links
- `styles.css` — Global layout, typography, spacing, and component styling
- `script.js` — Main page interactions and shared behavior
- `css/theme-toggle.css` & `js/theme-toggle.js` — Theme/font selector UI and behavior
- `assets/` — Logos and shared visual assets

For routine site updates:

1. Edit the content directly in `index.html`
2. Adjust layout or visual treatment in `styles.css` or `css/theme-toggle.css`
3. Update behavior in `script.js` or `js/theme-toggle.js`
4. Preview with the platform-appropriate helper above and run the relevant checks

When changing cached CSS or JavaScript, update its query version in the HTML
references. If `css/fonts.css` changes, regenerate its SHA-384 integrity value in
both `index.html` and `404.html`; the resource checks catch stale hashes.

## 📝 Adding or Updating Project Cards

Project and library entries use the same card structure in `index.html`. Use the existing cards as the canonical pattern.

```html
<article class="project-card">
    <div class="project-top">
        <div class="header-row">
            <div class="project-header">
                <h3>Project Name</h3>
            </div>
            <span class="project-status status-active">Active</span>
        </div>
        <div class="project-subtitle">Short one-line summary</div>
    </div>
    <p class="project-description">
        Project description goes here.
    </p>
    <div class="project-tech">
        <span class="tech-tag">Language</span>
        <span class="tech-tag">Framework</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/..." class="project-link">Source</a>
        <a href="https://..." class="project-link">Demo</a>
    </div>
</article>
```

Status styles currently in use include:

- `status-active`
- `status-beta`
- `status-library`

## 🚀 Deployment Notes

- The canonical live site is `https://www.starlightdaemon.dev/`
- GitHub Pages is already configured and deployed
- Branch/folder publishing from `main` at the repository root is the active publishing method
- There is no build command or generated site directory; the checked-in production files are the deployable output
- The absence of `.nojekyll` is intentional; the working default Pages/Jekyll pass-through is preserved
- `CNAME` is deployment-critical and should be treated conservatively
- Non-production folders may exist alongside live files without being part of the deployed homepage flow

## 📄 License

This repository is licensed under the MIT License. See [`LICENSE`](LICENSE).

Bundled fonts use the SIL Open Font License 1.1; see [`assets/fonts/OFL.txt`](assets/fonts/OFL.txt).
