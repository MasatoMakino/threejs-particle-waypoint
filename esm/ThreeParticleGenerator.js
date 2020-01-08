import { ThreeParticle } from "./ThreeParticle";
import { ParticleGenerator } from "particle-waypoint";
export class ThreeParticleGenerator extends ParticleGenerator {
    constructor(parent, path, texturePath, scale, option) {
        super(path, option);
        this.textureCounter = 0;
        this.parent = parent;
        this.scale = scale;
        if (Array.isArray(texturePath)) {
            this.texturePath = texturePath;
        }
        else {
            this.texturePath = [texturePath];
        }
    }
    generateParticle(path) {
        const particle = new ThreeParticle(path);
        particle.init(this.parent, this.texturePath[this.textureCounter], this.scale);
        this.textureCounter = (this.textureCounter += 1) % this.texturePath.length;
        return particle;
    }
    generateAll() {
        this.textureCounter = 0;
        super.generateAll();
    }
}
