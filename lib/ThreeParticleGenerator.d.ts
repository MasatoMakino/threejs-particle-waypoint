import { Object3D } from "three";
import { Particle, ParticleGenerator, ParticleWay } from "particle-waypoint";
import { ParticleGeneratorOption } from "particle-waypoint";
export declare class ThreeParticleGenerator extends ParticleGenerator {
    protected parent: Object3D;
    protected texturePath: string[];
    protected scale: number;
    protected textureCounter: number;
    constructor(parent: Object3D, path: ParticleWay | ParticleWay[], texturePath: string | string[], scale: number, option: ParticleGeneratorOption);
    protected generateParticle(path: ParticleWay): Particle;
    generateAll(): void;
}
//# sourceMappingURL=ThreeParticleGenerator.d.ts.map