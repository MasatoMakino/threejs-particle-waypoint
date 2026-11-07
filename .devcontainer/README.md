# .devcontainer

Development container configurations for this project.

## Containers

| Container           | Directory               | Purpose                                                            |
| ------------------- | ----------------------- | ------------------------------------------------------------------ |
| pnpm Runner         | `.devcontainer/`        | Isolated pnpm execution, Chrome browser testing, iptables firewall |
| Claude Code Sandbox | `.devcontainer/claude/` | Claude Code agent with API access and persistent config            |

## Files

| File                       | Description                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| `devcontainer.json`        | pnpm Runner container configuration                                 |
| `Dockerfile`               | pnpm Runner image (Node 22 + pnpm + Chrome + xvfb + firewall tools) |
| `firewall-base.sh`         | Shared iptables firewall logic (used by both containers)            |
| `init-firewall.sh`         | pnpm Runner firewall domain allowlist                               |
| `seccomp-chrome.json`      | Custom seccomp profile for Chrome sandbox without SYS_ADMIN         |
| `claude/devcontainer.json` | Claude Code Sandbox container configuration                         |
| `claude/Dockerfile`        | Claude Code image (gh, delta, zsh, Chrome)                          |
| `claude/init-firewall.sh`  | Claude Code firewall domain allowlist (adds Anthropic API)          |

## Design Decisions

See [DESIGN.md](DESIGN.md) for rationale on security choices, including the custom seccomp profile.
