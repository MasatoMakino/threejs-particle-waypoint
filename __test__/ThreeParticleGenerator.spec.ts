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
  it("should be exist", () => {
    const { generator } = getGenerator();
    expect(generator).not.toBeUndefined();
  });

  const testGenerateAll = (interval: number, particleLength: number) => {
    const { generator, parent } = getGenerator();
    generator.animator.generationInterval = interval;
    generator.generateAll();
    expect(parent.children.length).toBe(particleLength);
  };
  it("should generate particles with interval", () => {
    testGenerateAll(250, 58);
    testGenerateAll(300, 48);
  });
});
