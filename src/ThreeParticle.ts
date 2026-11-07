import {
  Object3D,
  Sprite,
  SpriteMaterial,
  Texture,
  TextureLoader,
} from "three";
import { Particle } from "@masatomakino/particle-waypoint";

export class ThreeParticle extends Particle {
  protected sprite: Sprite | null = null;
  protected static loader: TextureLoader;
  protected parent: Object3D | null = null;

  init(parent: Object3D, texturePath: string, scale: number): Promise<Sprite> {
    if (ThreeParticle.loader == null) {
      ThreeParticle.loader = new TextureLoader();
    }
    this.parent = parent;

    return new Promise((resolve, reject) => {
      const map = ThreeParticle.loader.load(
        texturePath,
        (texture: Texture<HTMLImageElement>) => {
          sprite.scale.set(
            texture.image.width * scale,
            texture.image.height * scale,
            1.0,
          );
          return resolve(sprite);
        },
        undefined,
        (err) => {
          return reject(err);
        },
      );
      const mat = new SpriteMaterial({
        map: map,
        depthTest: false,
      });
      const sprite = new Sprite(mat);
      this.sprite = sprite;
      parent.add(sprite);
    });
  }

  /**
   * @throws TypeError when called before `init()` or after `dispose()`, or when the path has no points.
   */
  update(t: number): number {
    const n = super.update(t);
    if (this.sprite == null) {
      throw new TypeError(
        "ThreeParticle: update() was called before init() or after dispose().",
      );
    }
    const pos = this.path.getPoint(n);
    // particle-waypoint 0.8 returns null for a path without points.
    // Removal condition: the peer dependency moves to particle-waypoint 0.9, whose getPoint always returns a point.
    if (pos == null) {
      throw new TypeError("ThreeParticle: the path has no points.");
    }
    this.sprite.position.set(pos[0], pos[1], pos[2]);
    return n;
  }

  dispose(): void {
    super.dispose();

    if (this.parent && this.sprite?.parent) {
      this.sprite.parent.remove(this.sprite);
    }
    this.parent = null;
    this.sprite = null;
  }
}
