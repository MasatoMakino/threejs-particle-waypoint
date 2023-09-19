import {
  Object3D,
  Sprite,
  SpriteMaterial,
  Texture,
  TextureLoader,
} from "three";
import { Particle } from "@masatomakino/particle-waypoint";

export class ThreeParticle extends Particle {
  protected sprite: Sprite;
  protected static loader: TextureLoader;
  protected parent: Object3D;

  init(parent: Object3D, texturePath: string, scale: number): Promise<Sprite> {
    if (ThreeParticle.loader == null) {
      ThreeParticle.loader = new TextureLoader();
    }
    this.parent = parent;

    return new Promise((resolve, reject) => {
      const map = ThreeParticle.loader.load(
        texturePath,
        (texture: Texture) => {
          this.sprite?.scale.set(
            texture.image.width * scale,
            texture.image.height * scale,
            1.0
          );
          return resolve(this.sprite);
        },
        undefined,
        (err) => {
          return reject(err);
        }
      );
      const mat = new SpriteMaterial({
        map: map,
        depthTest: false,
      });
      this.sprite = new Sprite(mat);
      this.parent.add(this.sprite);
    });
  }

  update(t: number): number {
    const n = super.update(t);
    const pos = this.path.getPoint(n);
    this.sprite.position.set(pos[0], pos[1], pos[2]);
    return n;
  }

  dispose(): void {
    super.dispose();

    if (this.parent && this.sprite.parent) {
      this.sprite.parent.remove(this.sprite);
    }
    this.parent = null;
    this.sprite = null;
  }
}
