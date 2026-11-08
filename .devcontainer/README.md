# .devcontainer

The pnpm Runner container runs pnpm in isolation, runs the Chromium browser tests, and restricts outbound traffic with an iptables firewall. For the design rationale, see [DESIGN.md](DESIGN.md).

## Files

| File                | Description                               |
| ------------------- | ----------------------------------------- |
| `devcontainer.json` | Container configuration                   |
| `Dockerfile`        | Image (Node.js, pnpm, Chromium, firewall) |
| `firewall-base.sh`  | iptables firewall logic                   |
| `init-firewall.sh`  | Firewall domain allowlist                 |
