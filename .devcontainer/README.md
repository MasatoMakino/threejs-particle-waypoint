# .devcontainer

Development container configuration for this project. The pnpm Runner container runs pnpm in isolation, runs the Chromium browser tests, and restricts outbound traffic with an iptables firewall.

## Files

| File                  | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| `devcontainer.json`   | Container configuration                                        |
| `Dockerfile`          | Image (Node 22 + pnpm + Chromium + xvfb + firewall tools)      |
| `firewall-base.sh`    | iptables firewall logic                                        |
| `init-firewall.sh`    | Firewall domain allowlist                                      |
| `seccomp-chrome.json` | Custom seccomp profile for Chrome sandbox without SYS_ADMIN    |

## Design Decisions

See [DESIGN.md](DESIGN.md) for rationale on security choices, including the custom seccomp profile.
