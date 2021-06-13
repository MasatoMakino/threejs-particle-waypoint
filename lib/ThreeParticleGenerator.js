"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreeParticleGenerator = void 0;
const ThreeParticle_1 = require("./ThreeParticle");
const particle_waypoint_1 = require("particle-waypoint");
class ThreeParticleGenerator extends particle_waypoint_1.ParticleGenerator {
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
        const particle = new ThreeParticle_1.ThreeParticle(path);
        particle.init(this.parent, this.texturePath[this.textureCounter], this.scale);
        this.textureCounter = (this.textureCounter += 1) % this.texturePath.length;
        return particle;
    }
    generateAll() {
        this.textureCounter = 0;
        super.generateAll();
    }
}
exports.ThreeParticleGenerator = ThreeParticleGenerator;
