You are the StarlightDaemonDev Instance agent, operating inside /mnt/e/StarlightDaemonDev (or the repo root wherever StarlightDaemonDev is checked out).

Read first:
- AGENTS.md
- .raiden/README.md
- .raiden/state/CURRENT_STATE.md
- .raiden/writ/WORKSPACE_AUDIT_PROTOCOL.md

Current objective:
Verify and commit the Edict v0.4.0 migration files that RAIDEN central wrote into this Instance on 2026-05-14. No new writes are needed — RAIDEN central completed all file operations; your task is verification and commit only.

Known constraints:
- Do not modify CURRENT_STATE.md, OPEN_LOOPS.md, DECISIONS.md, or WORK_LOG.md.
- Do not push without explicit operator confirmation.
- No Co-Authored-By or agent attribution lines in the commit message.
- Do not run raiden_updater.cli apply — use plan only.

Already true (RAIDEN central wrote these on 2026-05-14):
- .raiden/writ/WORKSPACE_AUDIT_PROTOCOL.md — new file, v0.4.0 content installed.
  SHA-256: 1fa98a0ab068349d71556b142d433fe52462de0cca237d773e4e3dc2ad5bdbb0
- .raiden/instance/baseline.json — WORKSPACE_AUDIT_PROTOCOL.md entry added;
  installed_edict_version bumped 0.2.0 → 0.4.0.
- .raiden/instance/metadata.json — installed_edict_version bumped 0.2.0 → 0.4.0.
- .raiden/README.md — ## Workspace Audit section appended.
- .gitignore — audit-output exclusion block already present; no change.
- This file (.raiden/local/prompts/audit-protocol-install-handoff.md) — written by RAIDEN central.

Prior install context:
- .raiden/ was originally untracked and installed at v0.2.0 in a prior session.
- Check git log to confirm whether .raiden/ and AGENTS.md have been committed before.
  If they have not: include the entire .raiden/ directory and AGENTS.md in the commit.
  If they have: include only the changed files listed in step 4 below.

Still open:
1. Run `git log --oneline -5` — check whether .raiden/ and AGENTS.md appear in recent commits.
2. Run `git status --porcelain` — confirm only the migration files (and possibly .raiden/ + AGENTS.md
   if previously untracked) appear. Any unexpected files: stop and surface to operator.
3. Run `grep installed_edict_version .raiden/instance/metadata.json`
   → expected: "0.4.0"
4. Run from /mnt/e/Raiden/toolkit/updater/ (RAIDEN central):
     python3 -m raiden_updater.cli plan \
       --instance /mnt/e/StarlightDaemonDev \
       --package /mnt/e/Raiden/toolkit/updater/fixtures/sample_package
   → expected: Block reason: Already up to date — no changes needed
   If any other result: stop and surface to operator.
5. Stage and commit. Files to include:
   If .raiden/ not yet in git history:
     AGENTS.md
     .raiden/  (entire directory)
   If .raiden/ already committed, include only:
     .raiden/writ/WORKSPACE_AUDIT_PROTOCOL.md
     .raiden/instance/baseline.json
     .raiden/instance/metadata.json
     .raiden/README.md
     .raiden/local/prompts/audit-protocol-install-handoff.md
   Suggested commit message (first-time .raiden/ commit):
     "install: RAIDEN Edict v0.4.0 — initial .raiden/ install and WORKSPACE_AUDIT_PROTOCOL"
   Suggested commit message (update only):
     "install: RAIDEN Edict v0.2.0 → v0.4.0 (WORKSPACE_AUDIT_PROTOCOL install)"
6. Run `git status --porcelain` after commit — confirm clean.

Do not:
- Modify any managed file in .raiden/writ/
- Reopen settled naming or architecture
- Treat review artifacts as canon unless adopted
- Broaden the task beyond committing the files listed above
- Run the workspace audit itself

Close out with:
- result: commit SHA
- evidence checked: git log check, git diff output, plan validator output, version grep result
- remaining risks: none expected; surface any anomaly observed
