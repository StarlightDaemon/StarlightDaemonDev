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
- `index.html` & `stargate.html` — Core page routes
- `styles.css` & `script.js` — Global styling and logic
- `css/` & `js/` — Modular feature code and theme handling
- `assets/` — Media and graphical resources
- `CNAME` — Custom domain configuration

### Support / Development
Tooling and documentation for local engineering.
- `README.md` & `CHANGELOG.md` — Core project context
- `.agent/` — Automation and workflow definitions
- `start-dev-server.sh` — Local development helper

### Retained Non-Production Areas
Historical contexts, staging environments, and ongoing ideas kept for reference.
- `tests/` — Exploratory rendering and unit validation
- `afterglows_staging/` — Draft concepts and layout iterations retained for reference only; not the live Afterglows site
- `concepts/` & `ideas/` — Tracked architectural thoughts and documentation

*(These folders are intentionally non-production. They are retained as reference material and should not be treated as the canonical live site implementation.)*

External project sites such as `Afterglows` may have their own standalone repositories and custom domains. This repository only links to those sites unless their files are explicitly present in the production root.

## 💻 Local Development

The site is a root-published static environment, so most day-to-day work happens directly in the root HTML, CSS, JS, and supporting asset folders.

To start the local server:

```bash
./start-dev-server.sh
```

## ✨ Current Site Features

- Responsive static portfolio published from the repository root
- Multi-section homepage covering projects, libraries, and skills
- Theme and font controls implemented through shared CSS/JS modules
- Dedicated `stargate.html` route for the archived Stargate terminal experience
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
4. Preview locally with `./start-dev-server.sh`

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
- The repository root is the active published source.
- `CNAME` is deployment-critical and should be treated conservatively
- Non-production folders may exist alongside live files without being part of the deployed homepage flow

## 📄 License

This repository is licensed under the MIT License. See [`LICENSE`](LICENSE).

Bundled areas may include their own `LICENSE` files for clarity, but the current intended default for this repository is MIT unless a future file explicitly states otherwise.
