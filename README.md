# threejs-particle-waypoint

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@masatomakino/threejs-particle-waypoint.svg?style=flat)](https://www.npmjs.com/package/@masatomakino/threejs-particle-waypoint)
[![build test](https://github.com/MasatoMakino/threejs-particle-waypoint/actions/workflows/ci_main.yml/badge.svg)](https://github.com/MasatoMakino/threejs-particle-waypoint/actions/workflows/ci_main.yml)

This ESM library renders the waypoint particles of [@masatomakino/particle-waypoint](https://www.npmjs.com/package/@masatomakino/particle-waypoint) as three.js `Sprite` objects.

## Demo

[Demo Page](https://masatomakino.github.io/threejs-particle-waypoint/demo/)

## Installation

Install the package with its peer dependencies:

```bash
pnpm add @masatomakino/threejs-particle-waypoint @masatomakino/particle-waypoint three
```

## Usage

```js
import { ParticleWay } from "@masatomakino/particle-waypoint";
import { ThreeParticleGenerator } from "@masatomakino/threejs-particle-waypoint";

const path = new ParticleWay([
  [0, 0, 0],
  [0, 10, 0],
  [10, 10, 10],
]);

const generator = new ThreeParticleGenerator(
  scene, // Object3D that holds the sprites
  path, // ParticleWay or ParticleWay[]
  ["map01.png", "map02.png"], // texture path or paths, used in turn
  0.005, // sprite size per texture pixel
  { generationMode: "loop" },
);
generator.play();
```

## License

[MIT licensed](LICENSE).
