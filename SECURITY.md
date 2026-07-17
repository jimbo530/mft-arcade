# Security Policy

MfT Arcade is a Play-for-Impact gaming portal on Base. Bugs in the registry (`arcade.json`), the front-end loader, or any game's smart-contract integration can mislead players into incorrect on-chain actions.

## Reporting a Vulnerability

**Preferred:** [GitHub Private Vulnerability Reporting](https://github.com/jimbo530/mft-arcade/security/advisories/new) — opens a private advisory thread.

**Fallback:** _Add a contact email here (e.g. `security@carbon-counting-club.com` or DM `@memefortrees.base.eth`)._

### Please include

- Affected file/function and line numbers
- Impact (severity, affected funds/users, attack precondition)
- Reproduction steps or proof-of-concept
- Suggested fix if you have one

### What to expect

- Acknowledgement within 72 hours
- Severity triage within 7 days
- Coordinated disclosure once a fix is deployed or determined infeasible

## Scope

**In scope:** `index.html`, `arcade.json`, `js/`, anything that loads or invokes per-game logic.

**Out of scope:** Bugs internal to a specific game (file with the game's repo / author), upstream NFT contracts.

## Out-of-Scope Reports

Please do not file public issues for:

- Theoretical attacks without a working PoC
- Best-practice / style critiques (those are fine as regular issues)
- Issues in upstream npm dependencies (file with the upstream)

Thank you for helping keep this project safe.