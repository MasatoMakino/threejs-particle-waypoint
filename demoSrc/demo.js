import {
  AmbientLight,
  Color,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { ParticleWay } from "@masatomakino/particle-waypoint";
import { ThreeParticleGenerator } from "../";

const W = 800;
const H = 600;
let renderer;
let scene;
let camera;

const onDomContentsLoaded = () => {
  initScene();
  initWaypoint();

  render();
};

const initScene = () => {
  // シーンを作成
  scene = new Scene();
  camera = new PerspectiveCamera(45, W / H, 1, 400);
  camera.position.set(0, 0, 50);
  scene.add(camera);

  const renderOption = {
    canvas: document.getElementById("webgl-canvas"),
    antialias: true,
  };
  renderer = new WebGLRenderer(renderOption);
  renderer.setClearColor(new Color(0x000000));
  renderer.setSize(W, H);
  renderer.setPixelRatio(window.devicePixelRatio);

  //平行光源オブジェクト(light)の設定
  const ambientLight = new AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);
};

const initWaypoint = () => {
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
    }
  );
  generator.animator.setGenerationInterval(0.08, 4 * 8);
  generator.play();
};

const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};
/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
window.onload = onDomContentsLoaded;
