import {
  AmbientLight,
  Color,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

export const initScene = (W, H) => {
  // シーンを作成
  const scene = new Scene();
  const camera = new PerspectiveCamera(45, W / H, 1, 400);
  camera.position.set(0, 0, 50);
  scene.add(camera);

  const renderOption = {
    canvas: document.getElementById("webgl-canvas"),
    antialias: true,
  };
  const renderer = new WebGLRenderer(renderOption);
  renderer.setClearColor(new Color(0x000000));
  renderer.setSize(W, H);
  renderer.setPixelRatio(window.devicePixelRatio);

  //平行光源オブジェクト(light)の設定
  const ambientLight = new AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);
  return { scene, camera, renderer };
};

export const startRendering = (scene, camera, renderer) => {
  const render = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();
};
