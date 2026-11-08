# AGENTS.md

For the project overview and the usage, see [README.md](README.md).

## Commands

Run every pnpm command inside the DevContainer. For the container configuration, see [.devcontainer/README.md](.devcontainer/README.md). To work in a git worktree, see [Worktrees](.devcontainer/DESIGN.md#worktrees).

```bash
# Start the container (once per working tree)
devcontainer up --workspace-folder .

# Build the TypeScript sources into esm/
devcontainer exec --workspace-folder . pnpm run buildTS

# Run the tests (Vitest browser mode with Chromium)
devcontainer exec --workspace-folder . pnpm test

# Run one test file
devcontainer exec --workspace-folder . pnpm exec vitest run __test__/ThreeParticle.spec.ts

# Run the tests with coverage
devcontainer exec --workspace-folder . pnpm run coverage

# Build the TypeScript sources and the demo page into docs/demo/
devcontainer exec --workspace-folder . pnpm run build

# Serve the demo page with watch mode on container port 3000
devcontainer exec --workspace-folder . pnpm run start:dev
```

The container publishes port 3000 on a random port of `127.0.0.1`. To find the port, run:

```bash
docker port "$(docker ps -q --filter label=devcontainer.local_folder="$PWD")" 3000
```
