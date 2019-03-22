import { ThreeParticle } from "./ThreeParticle";
import { ParticleGenerator } from "particle-waypoint";
export class ThreeParticleGenerator extends ParticleGenerator {
    constructor(parent, path, texturePath, scale) {
        super(path);
        this.parent = parent;
        this.texturePath = texturePath;
        this.scale = scale;
    }
    generateParticle(path) {
        const pathParticle = new ThreeParticle(this.path);
        pathParticle.init(this.parent, this.texturePath, this.scale);
        return pathParticle;
    }
}
