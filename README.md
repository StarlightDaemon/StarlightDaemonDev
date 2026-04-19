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
- `README.md`, `CHANGELOG.md`, `LICENSE` — Core project context
- `.agent/` — Automation and workflow definitions
- `start-dev-server.sh` — Local development helper

### Retained Non-Production Areas
Historical contexts, staging environments, and ongoing ideas kept for reference.
- `tests/` — Exploratory rendering and unit validation
- `afterglows_staging/` — Draft concepts and layout iterations
- `concepts/` & `ideas/` — Tracked architectural thoughts and documentation

*(These folders are intentionally non-production. They are retained as reference material and should not be treated as the canonical live site implementation.)*

## 💻 Local Development

The site is a root-published static environment, so most day-to-day work happens directly in the root HTML, CSS, JS, and supporting asset folders.

To start the local server:

```bash
./start-dev-server.sh
```

## 🚀 Deployment Notes

- The canonical live site is `https://www.starlightdaemon.dev/`
- GitHub Pages is already configured and deployed
- The repository root is the active published source.
- `CNAME` is deployment-critical and should be treated conservatively
- Non-production folders may exist alongside live files without being part of the deployed homepage flow

## 📄 License

MIT. See [`LICENSE`](LICENSE).
