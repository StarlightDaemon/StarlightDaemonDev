# StarlightDaemonDev

The source of the live portfolio site https://www.starlightdaemon.dev/: plain static HTML, CSS and JavaScript with no framework, package manager or build step. GitHub Pages publishes the repository root of `main`. It is a public GitHub repository (StarlightDaemon/StarlightDaemonDev).

## Run and test

No install step. Node.js 18+ for the checks; Python 3 for the preview.

- Static checks: `node scripts/validate-site.mjs`
- Regression tests: `node --test "_checks/*.test.cjs"`
- Preview: `./start-dev-server.ps1` (Windows) or `bash ./start-dev-server.sh`, or `python -m http.server 8080 --bind 127.0.0.1` from the repo root. The preview doesn't emulate Jekyll or the custom 404 routing.

CI (`.github/workflows/verify-site.yml`) runs both check suites on Linux for every push and pull request to `main`. It reports but doesn't block deployment, and it can't deploy anything itself.

## Layout

- Published site: `index.html`, `404.html`, `homelab.html` (redirect to the homelab site), `styles.css`, `script.js`, `css/`, `js/`, `assets/` (including self-hosted fonts and their licence), `CNAME`, `robots.txt`, `sitemap.xml`
- `_config.yml`: keeps repository docs and tooling out of the published site (dot- and underscore-prefixed paths are excluded automatically)
- `_checks/` and `scripts/`: the checks
- `concepts/`, `ideas/`: tracked planning notes, not production code
- `.agent/`: older workflow notes
- `.raiden/state/`: the project records (see below)

## Key rules

- Main branch is `main`. Agent work goes on `<agent>/<task>` branches in their own worktrees.
- **Every push to `main` deploys the live site** through GitHub Pages. Pushing is a deployment: ask the owner first. The `protect-main` ruleset blocks force-push and deletion of `main` for everyone.
- When you add a tracked file that isn't part of the site, add it to the `exclude` list in `_config.yml`, or Pages will publish it.
- Keep the Content Security Policy (`default-src 'self'`, no `unsafe-inline`) on every production page, and update the SRI hash when `css/fonts.css` changes.
- Project sites with their own repositories and domains (Afterglows, the homelab site) are only linked from here (D-001, D-002). `afterglows_staging/` and `tests/` are ignored local reference folders, not live code.
- New changes go under `[Unreleased]` in `CHANGELOG.md`.
- No `Co-Authored-By` or other agent attribution lines in commits; the `commit-msg` hook enforces this. Never bypass it.
- Don't edit `.raiden/writ/` or `.raiden/instance/`. They're historical RAIDEN v2 text kept for the old tooling. Where they, `.raiden/README.md` or `.raiden/local/` disagree with this file, this file wins.

## Project records

This file and `.raiden/state/` are authoritative for this repo. Read in this order and stop when you have what you need:
1. `.raiden/state/CURRENT_STATE.md`: deployment, domain routing, what's live and known constraints.
2. The `## Active` section at the top of `.raiden/state/OPEN_LOOPS.md`: open, deferred and held items (statuses: `open`, `deferred`, `held: <who>`, `no-action`, `accepted`, `closed`).
3. Only when needed: `DECISIONS.md` (IDs `D-0xx`), `WORK_LOG.md` and `CHANGELOG.md` (history and evidence). Audit and remediation reports in the repo root are gitignored on purpose (see `.gitignore`), so they exist only in the owner's local checkout and are never published; don't commit them.

Current picture: nothing open or deferred. `v1.1.0` (2026-11-10) is the latest release and is live.

Update `CURRENT_STATE.md` and `OPEN_LOOPS.md` when you finish or pause work. Keep one home per fact and link evidence; don't paste it in. Never renumber or reuse a loop or decision ID. Medium+ audit findings become loops.

## Working in parallel

One agent per worktree. Before starting, read the Claims section of `../../HANDOFF.md` (the workspace folder two levels above the repo or worktree root, outside Git, so every worktree sees the same file) and `git worktree list`, then add your claim line there; mark it done when you finish. Separate tasks may run in parallel only when both claims are listed there and they don't touch the same files. The owner (or the agent they assign) merges branches and updates `.raiden/state/`. Releases, deployments, the hook and Git config are one-at-a-time work.

This repository is public: don't commit personal names, absolute local paths or details of the owner's private tooling.
