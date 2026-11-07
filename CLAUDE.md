# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ESM TypeScript library that provides Three.js particle animation along waypoint paths. Wraps `@masatomakino/particle-waypoint` (core engine) with Three.js `Sprite`-based rendering.

- **Package**: `@masatomakino/threejs-particle-waypoint`
- **Peer dependencies**: `three` (>=0.126.0 <1.0.0), `@masatomakino/particle-waypoint` (^0.8.0)

## Commands

All pnpm commands must run inside the DevContainer.

```bash
# Build (TypeScript compilation to esm/)
devcontainer exec --workspace-folder . pnpm run buildTS

# Run all tests (Vitest browser mode with Chrome)
devcontainer exec --workspace-folder . pnpm test

# Run a single test file
devcontainer exec --workspace-folder . pnpm exec vitest run __test__/ThreeParticle.spec.ts

# Run tests with coverage
devcontainer exec --workspace-folder . pnpm run coverage

# Full build (TypeScript + demo page)
devcontainer exec --workspace-folder . pnpm run build
```

## Architecture

Two classes extending `@masatomakino/particle-waypoint` base classes:

- **`ThreeParticle`** (`src/ThreeParticle.ts`) - Extends `Particle`. Wraps a Three.js `Sprite` with texture loading. Updates sprite position along waypoint path via `update(t)`.
- **`ThreeParticleGenerator`** (`src/ThreeParticleGenerator.ts`) - Extends `ParticleGenerator`. Creates `ThreeParticle` instances, attaches them to a parent `Object3D`, cycles through texture paths.

Output is ESM-only (`esm/` directory), with `.d.ts` declarations.

## Testing

Tests run in **Vitest browser mode** with WebDriverIO + headless Chrome (SwiftShader for WebGL software rendering). See `vitest.config.ts` for Chrome options (`--use-gl=angle`, `--use-angle=swiftshader`).

## DevContainer

Two configurations in `.devcontainer/`:

- **Default** (`devcontainer.json`) - Interactive development with pnpm isolation and network firewall
- **Claude** (`claude/devcontainer.json`) - Automated agent use

Both use seccomp profile (`seccomp-chrome.json`) for Chrome sandboxing instead of `--cap-add=SYS_ADMIN`.

## CI/CD

- **CI** (`ci_main.yml`): Node matrix [24.x, 26.x]
- **GitHub Pages** (`gh-pages.yml`): Build demo + typedoc, deploy via official `actions/deploy-pages`
- **npm publish** (`npm_publish.yml`): `workflow_dispatch` from a tag, OIDC trusted publishing with `npm-publish` environment gate
