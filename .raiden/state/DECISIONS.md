# Decisions

## D-001

- Date: 2026-05-08 (approx, pre-RAIDEN)
- Status: Active
- Decision: Afterglows and Stargate are hosted in their own standalone repos; this repo links to them via tiles but does not serve their production files.
- Rationale: separating project sites from the portfolio repo reduces coupling and allows each site to version independently.

## D-002

- Date: 2026-05-08 (approx, pre-RAIDEN)
- Status: Active
- Decision: the homelab embedded submodule is removed; homelab.starlightdaemon.dev is a standalone repo linked via tile only.
- Rationale: submodule coupling was fragile; the homelab site is fully independent and should not be tied to the portfolio repo's commit cadence.
