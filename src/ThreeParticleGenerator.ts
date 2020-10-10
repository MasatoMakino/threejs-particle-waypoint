import { Object3D } from "three";
import { ThreeParticle } from "./ThreeParticle";
import { Particle, ParticleGenerator, ParticleWay } from "particle-waypoint";
import { ParticleGeneratorOption } from "particle-waypoint";

export class ThreeParticleGenerator extends ParticleGenerator {
  protected parent: Object3D;
  protected texturePath: string[];
  protected scale: number;
  protected textureCounter: number = 0;

  constructor(
    parent: Object3D,
    path: ParticleWay | ParticleWay[],
    texturePath: string | string[],
    scale: number,
    option: ParticleGeneratorOption
  ) {
    super(path, option);
    this.parent = parent;
    this.scale = scale;

    if (Array.isArray(texturePath)) {
      this.texturePath = texturePath;
    } else {
      this.texturePath = [texturePath];
    }
  }

  protected generateParticle(path: ParticleWay): Particle {
    const particle = new ThreeParticle(path);
    particle.init(
      this.parent,
      this.texturePath[this.textureCounter],
      this.scale
    );
    this.textureCounter = (this.textureCounter += 1) % this.texturePath.length;
    return particle;
  }

  public generateAll(): void {
    this.textureCounter = 0;
    super.generateAll();
  }
}
