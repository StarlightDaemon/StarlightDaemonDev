# StarlightDaemonDev

Canonical production repository for the StarlightDaemon website.

This repository is the main development and codebase source for the live site. It contains the production pages, shared assets, local development helpers, and a small set of retained non-production reference areas.

## Live Site

Canonical URL: [https://www.starlightdaemon.dev/](https://www.starlightdaemon.dev/)

GitHub Pages is already configured and working for this repository. This README describes the current repository and deployment reality only; it does not change deployment behavior.

## Repository Layout

### Production / live files

- `index.html`
- `stargate.html`
- `styles.css`
- `script.js`
- `css/`
- `js/`
- `assets/`
- `CNAME`

### Support / development files

- `README.md`
- `CHANGELOG.md`
- `LICENSE`
- `.agent/`
- `start-dev-server.sh`

### Retained non-production areas

- `tests/`
- `afterglows_staging/`
- `concepts/`
- `ideas/`

Some folders are intentionally non-production and are being retained for now as reference, staging, or documentation material. They should not be treated as the canonical live site implementation.

## Local Development

Start the local server with:

```bash
./start-dev-server.sh
```

The site is a root-published static site, so most day-to-day work happens directly in the root HTML, CSS, JS, and supporting asset folders.

## Deployment Notes

- The canonical live site is `https://www.starlightdaemon.dev/`
- GitHub Pages is already configured and live
- The repository root is the active published site source
- `CNAME` is deployment-critical and should be treated conservatively
- Non-production folders may exist alongside live files without being part of the deployed homepage flow

## License

MIT. See `LICENSE`.
