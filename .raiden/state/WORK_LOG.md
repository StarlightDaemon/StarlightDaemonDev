# Work Log

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
