import { describe, expect, it } from "vitest";
import { ThreeParticle } from "../src/index.js";
import { ParticleWay } from "@masatomakino/particle-waypoint";
import { Object3D } from "three";

const generateTestParticle = () => {
  const path = new ParticleWay([
    [0, 0, 0],
    [1, 1, 1],
  ]);
  return {
    path,
    particle: new ThreeParticle(path),
  };
};
describe("ThreeParticle", () => {
  it("should be constructable", () => {
    const { particle } = generateTestParticle();
    expect(particle).toBeTruthy();
  });

  it.fails("update after dispose", () => {
    const { particle } = generateTestParticle();
    const parent = new Object3D();
    const imagePath = "../demoSrc/map01.png";
    particle.init(parent, imagePath, 1);
    particle.dispose();
    particle.update(0.5);
  });

  it("should be child of Object3D with init", async () => {
    const { particle } = generateTestParticle();
    const parent = new Object3D();
    const imagePath = "../demoSrc/map01.png";
    particle.init(parent, imagePath, 3);
    expect(parent.children.length).toBe(1);
  });
});
