import { Object3D } from "three";
import { ParticleGenerator, ParticleWay, Particle } from "particle-waypoint";
import { ParticleGeneratorOption } from "particle-waypoint";
export declare class ThreeParticleGenerator extends ParticleGenerator {
    protected parent: Object3D;
    protected texturePath: string;
    protected scale: number;
    constructor(parent: Object3D, path: ParticleWay, texturePath: string, scale: number, option: ParticleGeneratorOption);
    protected generateParticle(path: ParticleWay): Particle;
}
//# sourceMappingURL=ThreeParticleGenerator.d.ts.map