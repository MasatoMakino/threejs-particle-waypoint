"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreeParticle = void 0;
const three_1 = require("three");
const particle_waypoint_1 = require("particle-waypoint");
class ThreeParticle extends particle_waypoint_1.Particle {
    init(parent, texturePath, scale) {
        if (ThreeParticle.loader == null) {
            ThreeParticle.loader = new three_1.TextureLoader();
        }
        this.parent = parent;
        const map = ThreeParticle.loader.load(texturePath, (texture) => {
            if (this.sprite == null)
                return;
            this.sprite.scale.set(texture.image.width * scale, texture.image.height * scale, 1.0);
        });
        const mat = new three_1.SpriteMaterial({
            map: map,
            depthTest: false,
        });
        this.sprite = new three_1.Sprite(mat);
        this.parent.add(this.sprite);
    }
    update(t) {
        const n = super.update(t);
        const pos = this.path.getPoint(n);
        this.sprite.position.set(pos[0], pos[1], pos[2]);
        return n;
    }
    dispose() {
        super.dispose();
        if (this.parent && this.sprite.parent) {
            this.sprite.parent.remove(this.sprite);
        }
        this.parent = null;
        this.sprite = null;
    }
}
exports.ThreeParticle = ThreeParticle;
