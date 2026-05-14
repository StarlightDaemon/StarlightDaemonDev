# Migration Remediation Handoff — StarlightDaemonDev — Edict v0.4.0 Pre-Migration

## Prompt ID

`raiden.shared.handoff.v1`

## Purpose

StarlightDaemonDev's RAIDEN v0.2.0 install (2026-05-08) was never committed to git.
Before the RAIDEN central agent can run the Edict v0.4.0 migration (v0.3.0 skipped),
the v0.2.0 install must be committed and the working tree must be clean.

## Template

```text
You are continuing a bounded work package inside the current repo.

Read first:
- AGENTS.md (on disk, untracked — check if present)
- .raiden/README.md
- .raiden/instance/metadata.json
- .gitignore (if present)

Current objective:
- Commit the existing RAIDEN v0.2.0 install so the RAIDEN central agent can
  proceed with the Edict v0.4.0 migration (v0.3.0 skipped).

Known constraints:
- Do NOT modify any file under .raiden/writ/ — these are RAIDEN-managed.
- Do NOT run the workspace audit.
- Do NOT run raiden_updater.cli apply.
- Commit attribution: no Co-Authored-By or agent attribution lines.

Already true (as of step-2 halt, 2026-05-13):
- RAIDEN v0.2.0 install exists on disk (agent-written 2026-05-08) but was never
  committed. Untracked: .raiden/, AGENTS.md, .codex.
- Current branch: main.
- .raiden/writ/ contains v0.2.0 managed content (OPERATING_RULES.md, OWNERSHIP_BOUNDARY.md,
  README.md). No WORKSPACE_AUDIT_PROTOCOL.md — that is the v0.4.0 add.

Still open:
1. Add .codex to .gitignore (operator decision 2026-05-13 — treat as local scratch/tooling):
   Create or edit .gitignore and add:
     # Local tooling scratch
     .codex
2. Add canonical audit-output exclusions to .gitignore as well (in the same edit):
     # RAIDEN audit outputs — operational findings, not framework content
     audit-reports/
     .raiden/state/AUDIT_LOG.md
     .raiden/state/last-audit.md
3. Commit the v0.2.0 RAIDEN install. Stage RAIDEN files:
   - AGENTS.md
   - .raiden/ (entire directory)
   - .gitignore (created or modified in steps 1-2)
   Do NOT stage .codex — it is now gitignored.
   Suggested commit message:
   "chore: install RAIDEN Instance v0.2.0"
4. Verify clean tree: git status --porcelain should be empty.
5. Signal to the operator: StarlightDaemonDev is ready for the RAIDEN central agent
   to run the v0.4.0 migration prompt from
   /mnt/e/Raiden/toolkit/prompts/audit-protocol-migration-v0.4.0-prompt.md
   targeting --instance /mnt/e/StarlightDaemonDev. (v0.3.0 skipped; v0.4.0 direct.)

Do not:
- reopen settled naming or architecture
- treat review artifacts as canon unless adopted
- broaden the task beyond committing the v0.2.0 install
- run the workspace audit

Close out with:
- result: v0.2.0 RAIDEN install committed, working tree clean, operator notified
- evidence checked: git log shows RAIDEN commit, git status --porcelain empty
  (or shows only expected untracked items with documented disposition),
  .raiden/instance/metadata.json shows installed_edict_version 0.2.0
- remaining risks: .codex disposition needs operator confirmation if not resolved
```
