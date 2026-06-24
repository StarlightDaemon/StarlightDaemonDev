# Open Loops

## OL-001

- Title: Version-tag unreleased changelog entries
- Status: Open
- Why it matters: the CHANGELOG has a substantial unreleased section (V5.4 header, font switcher, project card refactor, skills grid). These are live in production but not tagged.
- Success condition: a version tag is cut and the unreleased section is promoted to a versioned entry.

---

## OL-002 — CLOSED

- Title: WSL→macOS migration remediation
- Status: Closed 2026-06-07
- What was done: Audit findings P1–P3 resolved in commit d4789e2 —
  CRLF line endings stripped from `start-dev-server.sh`,
  stale `/mnt/e/` WSL paths updated to `/Users/dante/Citadel/` in
  `.agent/workflows/start-server.md`,
  `.raiden/local/prompts/audit-protocol-install-handoff.md`, and
  `.raiden/local/prompts/migration-remediation.md`.
- Success condition met: Deployed working tree and full git history are clean of `/mnt/e/` references. Residual references exist only in `.claude/settings.local.json` (gitignored, macOS-inert local tool config) and are operationally inert.
