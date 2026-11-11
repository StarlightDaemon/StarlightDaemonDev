# Work Log

## 2026-11-10 — Distribution hardening

- Pulled `70f745d` (upstream validator and PR-only CI) under the uncommitted 2026-09-19 work; no conflicts.
- Review found no secrets in tracked files or history and no critical issues. Live probe showed Pages publishing `AGENTS.md`/`.html`, `CHANGELOG.html`, `README.md`, `concepts/`, `scripts/validate-site.mjs`, and `start-dev-server.sh`.
- Added `_config.yml` with an `exclude` list for those files. Jekyll was not available locally; the exclusions were confirmed live after deployment (below).
- CI now runs on pushes to `main` and runs `_checks/` alongside the upstream validator. Repository rules were not changed. The initial review checked only classic branch protection and wrongly reported `main` as unprotected; the push revealed the `protect-main` ruleset, which the owner account bypasses and which has no required status checks.
- Replaced machine-specific absolute paths in `.raiden/local/` with `<RAIDEN_ROOT>`/`<INSTANCE_ROOT>` placeholders; real paths moved to gitignored `.raiden/local/MACHINE.md`. Git history still contains the old paths; no history rewrite.
- Committed and pushed `de53209`. The verify workflow passed both suites on the push, the Pages build succeeded, and the live site returned 404 for every excluded path while serving pages and assets (including `styles.css?v=1.0.10`) normally.
- Slimmed `protect-main` at operator request. Before: deletion, force-push, creation, and update rules on all branches, with owner always-bypass, so it constrained no actual writer (sole admin collaborator, no deploy keys, read-only Actions token) and would have blocked Dependabot branch creation. After: deletion and force-push rules on `main` only, no bypass actors. A required verify check was considered and declined: with bypass it has no effect, and without bypass it forces a pull-request workflow.
- Open external item: `http://starlightdaemon.dev` returns Cloudflare 522 (HTTPS apex redirects correctly); needs a Cloudflare HTTPS redirect, outside this repo.

## 2026-09-19 — Portfolio refinement

- Used a read-only delegated frontend/documentation review and a final diff review; this session was the sole repository writer.
- Made display settings tolerate blocked reads/writes and obsolete saved values; preserved active-button and ARIA state independently of persistence.
- Fixed settings-panel sizing and group spacing, narrow-page overflow, and clipped project text. Cards retain the grid and grow to fit their content. Added font fallbacks and removed duplicate button/status styles.
- Completed reduced-motion CSS for smooth scrolling and settings transitions, including the specificity needed to override section entrance animations.
- Replaced the global live-server/NVM requirement with localhost-bound Python preview helpers for PowerShell and Bash, preserving CSP. Documented manual refresh, direct 404 preview, cache-version updates, font licensing, and verification commands.
- Corrected stale state claims about committed launch changes, deployment exclusions, font counts, stylesheet versions, and migration history. Retained historical maintenance context below; no closed loops were reopened.
- Verification: 17 dependency-free Node checks passed for storage failures, selection/dismissal behavior, case-sensitive local resource paths, and stylesheet integrity. JavaScript syntax and Git whitespace checks passed. PowerShell preview successfully served the repository when launched from its parent directory; Bash syntax passed, but no native macOS/Linux execution was performed.
- Browser verification: exercised all five themes; checked all four fonts at 320×640, 375×812, 768×1024, 1440×900, 2560×1440, and 640×360. No horizontal page overflow or settings-panel boundary overflow remained. Card text fits; Space Mono glyphs extend slightly beyond heading line boxes with visible overflow. Verified persistence on reload, Escape focus return, outside-click dismissal, skip-link focus, and 404 recovery. No warning/error console entries were observed on the homepage.
- Reduced-motion rules were inspected in the browser's parsed stylesheets and reviewed for cascade specificity; OS media emulation and a fresh Lighthouse run were not performed.
- Changes remain local and uncommitted. No push, tag, Pages settings, DNS, or deployment action was performed; live deployment remains unverified.

## 2026-09-07 — GitHub Pages pre-launch readiness pass

- Confirmed the custom-domain, branch/folder GitHub Pages architecture and retained
  the working default Pages/Jekyll pass-through; no `.nojekyll` exception is needed.
- Added a branded custom 404, favicon/touch icon assets, and a 1200×630 social
  preview; improved page metadata, crawl intent, and fallback copyright content.
- Corrected display-settings semantics and keyboard dismissal, made the skip link
  transfer focus to main content, and added a non-color cue to the footer link.
- Hardened CSP directives that are supported by meta delivery while removing the
  unsupported `frame-ancestors` meta directive.
- Verified locally with Lighthouse (Accessibility 100, Best Practices 100,
  Performance 98; LCP 1.8 s, TBT 0 ms, CLS 0), responsive browser checks from
  320 px through 1440 px, user-journey checks, case-sensitive asset checks, and
  zero findings from working-tree and 224-commit-history secret scans.
- No commit, push, merge, GitHub setting, DNS, or deployment action was performed.

## 2026-07-09 — Edict v2.0.0 + state normalization

- Applied RAIDEN Edict update 1.0.1 → 2.0.0 via `raiden_updater.cli` (plan → apply →
  re-plan confirmed "Already up to date"). Managed-file changes: added
  `ROUTING_POLICY.md`; removed `MODEL_TIERS.md` (flagged `managed_file_removal`
  warn — expected, file dropped from the new package); `README.md`,
  `OPERATING_RULES.md`, `WORKSPACE_AUDIT_PROTOCOL.md`, `FORK_REVIEW_PROTOCOL.md`,
  and `AGENTS.md` updated to the v2.0.0 content; `hooks/commit-msg` unchanged.
- Stamped `"state_schema_version": 2` into `.raiden/instance/metadata.json`.
- Routing overlay: removed the local `.raiden/local/MODEL_MAP.md` (untracked,
  never had git history — deleted directly rather than via `git rm`) and
  replaced it with `.raiden/local/ROUTING.md` (routing ladder R1–R4 plus offload
  pool); `.raiden/local/.gitignore` updated from `MODEL_MAP.md` to `ROUTING.md`
  to preserve the "never commit local overlay" policy for the new file.
- Bridge tracking fix: narrowed the root `.gitignore` (removed the bare
  `AGENTS.md` entry from the "internal documentation" block) and git-tracked
  the root `AGENTS.md` bridge, bringing its untracked-since-`af8edb6` Phase B
  de-path fix (relative `.raiden/...` paths, no absolute filesystem paths) into
  history. Recorded as D-003 in `DECISIONS.md`.
- State normalization (Fact-Home Rule, `.raiden/writ/OPERATING_RULES.md`):
  - Cleared the OL-001 loop-status restatement in `CURRENT_STATE.md` ("In
    Progress" previously re-explained OL-001's closure inline); reduced to a
    bare "See OL-001." citation. `OPEN_LOOPS.md` remains the sole authoritative
    home for loop status (OL-001 closed 2026-06-24, matching the `v1.0.0` tag
    date).
  - Removed the current-version claim "RAIDEN Instance at Edict v1.0.0" from
    `CURRENT_STATE.md` (installed Edict version now lives solely in
    `.raiden/instance/metadata.json`); the unique historical fact it carried
    (v1.0.0 installed 2026-06-13, commit `7caf282`) is relocated below.
  - Removed the hand-written `**Last updated:** 2026-07-08` footer from
    `CURRENT_STATE.md`; freshness is derived from git history per the Writ.

## 2026-06-13 — RAIDEN Edict v1.0.0 install

- RAIDEN Instance updated to Edict v1.0.0 (commit `7caf282`). Relocated here
  from `CURRENT_STATE.md` prose per the Fact-Home Rule (2026-07-09
  normalization).

## 2026-05-15 — RAIDEN state population

- State files populated from README, CHANGELOG, and git history.
- Session-startup prompt seeded to `.raiden/local/prompts/` (D-0039 one-off seed).

## 2026-05-08 — RAIDEN Edict v0.2.0 → v0.4.0 install

- RAIDEN Instance installed and migrated to v0.4.0; WORKSPACE_AUDIT_PROTOCOL.md in Writ.

## Pre-RAIDEN notable events

- homelab submodule removed; homelab.starlightdaemon.dev promoted to standalone repo.
- Afterglows and Stargate spun off to their own standalone repos.
- V5.4 header layout, font switcher, and project card refactor shipped (unreleased tag pending).

## Historical maintenance context retained during state refinement

- CSS pruning passes at `a2bb4f5` and `5fc5cce` were recorded as reducing dead selectors by approximately 29%.
- The 2026-06-23 repository audit used instrument v4.3 at `5fc5cce`. The maintenance sweep at `69148fc` addressed findings F1c/F1d/F1e/F3/F4/F5/F6/F7/F8/F9/F12/F14; subsequent state documentation recorded F1a/F1b, the remaining state-file F1c, and F10 (font licensing) as addressed. These are retained historical records, not a new audit verification.
