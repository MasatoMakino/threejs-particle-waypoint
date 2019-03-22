import { Object3D } from "three";
import { ParticleGenerator, ParticleWay, Particle } from "particle-waypoint";
export declare class ThreeParticleGenerator extends ParticleGenerator {
    protected parent: Object3D;
    protected texturePath: string;
    protected scale: number;
    constructor(parent: Object3D, path: ParticleWay, texturePath: string, scale: number);
    protected generateParticle(path: ParticleWay): Particle;
}
//# sourceMappingURL=ThreeParticleGenerator.d.ts.map