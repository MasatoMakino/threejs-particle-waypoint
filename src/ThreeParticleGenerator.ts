import { Object3D } from "three";
import { ThreeParticle } from "./ThreeParticle";
import { ParticleGenerator, ParticleWay, Particle } from "particle-waypoint";
import { ParticleGeneratorOption } from "particle-waypoint";

export class ThreeParticleGenerator extends ParticleGenerator {
  protected parent: Object3D;
  protected texturePath: string;
  protected scale: number;

  constructor(
    parent: Object3D,
    path: ParticleWay,
    texturePath: string,
    scale: number,
    option: ParticleGeneratorOption
  ) {
    super(path, option);
    this.parent = parent;
    this.texturePath = texturePath;
    this.scale = scale;
  }

  protected generateParticle(path: ParticleWay): Particle {
    const particle = new ThreeParticle(this.path);
    particle.init(this.parent, this.texturePath, this.scale);
    return particle;
  }
}
