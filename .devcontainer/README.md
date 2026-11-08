# .devcontainer

Development container configuration for this project. The pnpm Runner container runs pnpm in isolation, runs the Chromium browser tests, and restricts outbound traffic with an iptables firewall.

## Files

| File                | Description                                        |
| ------------------- | -------------------------------------------------- |
| `devcontainer.json` | Container configuration                            |
| `Dockerfile`        | Image (Node 22 + pnpm + Chromium + firewall tools) |
| `firewall-base.sh`  | iptables firewall logic                            |
| `init-firewall.sh`  | Firewall domain allowlist                          |

## Design Decisions

For the rationale of the security choices, see [DESIGN.md](DESIGN.md).
