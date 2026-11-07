# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ESM TypeScript library that provides Three.js particle animation along waypoint paths. Wraps `@masatomakino/particle-waypoint` (core engine) with Three.js `Sprite`-based rendering.

- **Package**: `@masatomakino/threejs-particle-waypoint`

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
