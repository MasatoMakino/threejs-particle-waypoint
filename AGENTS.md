# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Project Overview

ESM TypeScript library that provides Three.js particle animation along waypoint paths. Wraps `@masatomakino/particle-waypoint` (core engine) with Three.js `Sprite`-based rendering.

- **Package**: `@masatomakino/threejs-particle-waypoint`

## Commands

All pnpm commands must run inside the DevContainer. Each worktree has its own DevContainer. In a new worktree, run `devcontainer up --workspace-folder .` once before the other commands.

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
