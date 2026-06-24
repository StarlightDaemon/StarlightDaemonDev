# Open Loops

## OL-001 — CLOSED

- Title: Version-tag unreleased changelog entries
- Status: Closed 2026-06-24
- What was done: v1.0.0 was tagged and the [Unreleased] section in CHANGELOG.md was promoted to [1.0.0] with the release date.
- Success condition met: Version tag is cut and unreleased section is promoted to versioned entry.

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
