import { describe, expect, it } from "vitest";
import { ThreeParticleGenerator } from "../src/index.js";
import { Object3D } from "three";
import { ParticleWay } from "@masatomakino/particle-waypoint";
import { TestImage } from "./TestImage.js";

const getGenerator = () => {
  const parent = new Object3D();
  const particleWay = new ParticleWay([
    [0, 0, 0],
    [1, 1, 1],
  ]);
  const generator = new ThreeParticleGenerator(
    parent,
    particleWay,
    TestImage,
    1,
    {},
  );
  return { generator, parent };
};
describe("ThreeParticleGenerator", () => {
  it("generateAll() adds one sprite to the parent for each generated particle", () => {
    const { generator, parent } = getGenerator();
    generator.animator.generationInterval = 250;
    generator.generateAll();
    const particleCount = generator.particleContainer.particles.length;
    expect(particleCount).toBeGreaterThan(0);
    expect(parent.children.length).toBe(particleCount);
  });
});
