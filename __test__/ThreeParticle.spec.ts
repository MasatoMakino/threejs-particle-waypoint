import { describe, expect, it } from "vitest";
import { ThreeParticle } from "../src/index.js";
import { TestImage } from "./TestImage.js";
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

  it("update after dispose", () => {
    const { particle } = generateTestParticle();
    const parent = new Object3D();
    particle.init(parent, TestImage, 1);
    particle.dispose();
    expect(() => particle.update(0.5)).toThrow(TypeError);
  });

  it("should be child of Object3D with init", async () => {
    const { particle } = generateTestParticle();
    const parent = new Object3D();
    particle.init(parent, TestImage, 3);
    expect(parent.children.length).toBe(1);
  });
});
