import { TextureLoader, Sprite, SpriteMaterial } from "three";
import { Particle } from "particle-waypoint";
export class ThreeParticle extends Particle {
    init(parent, texturePath, scale) {
        if (ThreeParticle.loader == null) {
            ThreeParticle.loader = new TextureLoader();
        }
        this.parent = parent;
        const map = ThreeParticle.loader.load(texturePath, (texture) => {
            if (this.sprite == null)
                return;
            this.sprite.scale.set(texture.image.width * scale, texture.image.height * scale, 1.0);
        });
        const mat = new SpriteMaterial({
            map: map,
            depthTest: false
        });
        this.sprite = new Sprite(mat);
        this.parent.add(this.sprite);
    }
    update(t) {
        super.update(t);
        const pos = this.path.getPoint(t);
        this.sprite.position.set(pos[0], pos[1], pos[2]);
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
