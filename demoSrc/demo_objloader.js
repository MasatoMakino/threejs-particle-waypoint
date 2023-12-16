import { ParticleWay } from "@masatomakino/particle-waypoint";
import { ThreeParticleGenerator } from "../esm/index.js";
import { initScene, startRendering } from "./common.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

/**
 * OBJLoaderを使ってパスを読み込むサンプル
 *
 * OBJファイルでは、閉じていない線分も読み込める。
 * 3Dモデルの形式によっては、閉じていない線分は保存の時点で削除されている場合がある。
 */

const W = 800;
const H = 600;

const onDomContentsLoaded = async () => {
  const { scene, camera, renderer } = initScene(W, H);
  await initWaypoint(scene);
  startRendering(scene, camera, renderer);
};

const initWaypoint = async (scene) => {
  const loader = new OBJLoader();
  const obj = await loader.loadAsync("./path.obj");

  //OBJLoaderで読み込んだパスは、LineSegmentsオブジェクトとして取得される
  const line = obj.children[0];
  //LineSegmentsオブジェクトの各頂点は、"position"という名前のBufferAttributeとして取得できる
  const positions = line.geometry.getAttribute("position");

  //BufferAttributeから各頂点の座標を取得する
  const points = Array.from({ length: positions.count }, (_, i) => {
    const x = positions.getX(i);
    const y = positions.getY(i);
    const z = positions.getZ(i);
    return [x, y, z];
  });

  const path = new ParticleWay(points);
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

window.onload = onDomContentsLoaded;
