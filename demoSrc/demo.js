import { ParticleWay } from "@masatomakino/particle-waypoint";
import { ThreeParticleGenerator } from "../esm/index.js";
import { initScene, startRendering } from "./common.js";
const W = 800;
const H = 600;

const onDomContentsLoaded = () => {
  const { scene, camera, renderer } = initScene(W, H);
  initWaypoint(scene);
  startRendering(scene, camera, renderer);
};

const initWaypoint = (scene) => {
  const path = new ParticleWay([
    [0.0, 0.0, 0.0],
    [0.0, 10.0, 0.0],
    [10.0, 10.0, 0.0],
    [10.0, 10.0, 10.0],
    [0.0, 10.0, 10.0],
    [10.0, 0.0, 10.0],
  ]);

  const generator = new ThreeParticleGenerator(
    scene,
    path,
    ["./map01.png", "./map02.png", "./map03.png", "./map04.png"],
    0.005,
    {
      generationMode: "loop",
    },
  );
  generator.animator.setGenerationInterval(0.08, 4 * 8);
  generator.play();
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
window.onload = onDomContentsLoaded;
