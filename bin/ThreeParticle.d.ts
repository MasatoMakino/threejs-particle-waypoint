import { TextureLoader, Object3D, Sprite } from "three";
import { Particle } from "particle-waypoint";
export declare class ThreeParticle extends Particle {
    protected sprite: Sprite;
    protected static loader: TextureLoader;
    protected parent: Object3D;
    init(parent: Object3D, texturePath: string, scale: number): void;
    update(t: number): void;
    dispose(): void;
}
//# sourceMappingURL=ThreeParticle.d.ts.map