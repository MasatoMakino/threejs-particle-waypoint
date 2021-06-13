/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./demoSrc/demo.js":
/*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ \"./esm/index.js\");\n\n\n\nconst W = 800;\nconst H = 600;\nlet renderer;\nlet scene;\nlet camera;\n\nconst onDomContentsLoaded = () => {\n  initScene();\n  initWaypoint();\n  render();\n};\n\nconst initScene = () => {\n  // シーンを作成\n  scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n  camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(45, W / H, 1, 400);\n  camera.position.set(0, 0, 50);\n  scene.add(camera);\n  const renderOption = {\n    canvas: document.getElementById(\"webgl-canvas\"),\n    antialias: true\n  };\n  renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer(renderOption);\n  renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_2__.Color(0x000000));\n  renderer.setSize(W, H);\n  renderer.setPixelRatio(window.devicePixelRatio); //平行光源オブジェクト(light)の設定\n\n  const ambientLight = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0xffffff, 1.0);\n  scene.add(ambientLight);\n};\n\nconst initWaypoint = () => {\n  const path = new particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.ParticleWay([[0.0, 0.0, 0.0], [0.0, 10.0, 0.0], [10.0, 10.0, 0.0], [10.0, 10.0, 10.0], [0.0, 10.0, 10.0], [10.0, 0.0, 10.0]]);\n  const generator = new ___WEBPACK_IMPORTED_MODULE_1__.ThreeParticleGenerator(scene, path, [\"./map01.png\", \"./map02.png\", \"./map03.png\", \"./map04.png\"], 0.005, {\n    generationMode: particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.GenerationMode.LOOP\n  });\n  generator.animator.setGenerationInterval(0.08, 4 * 8);\n  generator.play();\n};\n\nconst render = () => {\n  renderer.render(scene, camera);\n  requestAnimationFrame(render);\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nwindow.onload = onDomContentsLoaded;\n\n//# sourceURL=webpack://threejs-particle-waypoint/./demoSrc/demo.js?");

/***/ }),

/***/ "./esm/ParticleWayBuilder.js":
/*!***********************************!*\
  !*** ./esm/ParticleWayBuilder.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OBJLineType\": () => (/* binding */ OBJLineType),\n/* harmony export */   \"ParticleWayBuilder\": () => (/* binding */ ParticleWayBuilder)\n/* harmony export */ });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\n\nvar OBJLineType;\n\n(function (OBJLineType) {\n  OBJLineType[\"COMMENT\"] = \"#\";\n  OBJLineType[\"NAME\"] = \"o\";\n  OBJLineType[\"VALUE\"] = \"v\";\n})(OBJLineType || (OBJLineType = {}));\n\nclass ParticleWayBuilder {\n  /**\n   *  指定されたOBJファイルから、ParticleWayの配列を取り出す。\n   * @param objFilePath\n   * @param isClosed オプション クローズパスの場合にはtrueを指定する\n   */\n  static build(objFilePath, isClosed = false) {\n    return __awaiter(this, void 0, void 0, function* () {\n      const lines = yield this.getText(objFilePath);\n      let pathName = \"\";\n      let currentPath;\n      const pathArray = [];\n      lines.forEach(line => {\n        const type = this.getType(line);\n        const value = this.getValue(line);\n\n        switch (type) {\n          case OBJLineType.NAME:\n            this.push(currentPath, pathName, pathArray, isClosed);\n            currentPath = [];\n            pathName = value[0];\n            break;\n\n          case OBJLineType.VALUE:\n            const points = value.map(val => {\n              return parseFloat(val);\n            });\n            currentPath.push(points);\n            break;\n        }\n      }); //まだ格納していない処理中のパスを格納。\n\n      this.push(currentPath, pathName, pathArray, isClosed);\n      return pathArray;\n    });\n  }\n\n  static push(currentPath, pathName, pathArray, isClosed) {\n    if (currentPath == null) return;\n\n    if (isClosed) {\n      currentPath.push([...currentPath[0]]);\n    }\n\n    const path = new particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.ParticleWay(currentPath);\n    path.name = pathName;\n    pathArray.push(path);\n  }\n\n  static getText(objFilePath) {\n    return __awaiter(this, void 0, void 0, function* () {\n      const response = yield fetch(objFilePath);\n      const txt = yield response.text();\n      const lines = txt.split(/\\r\\n|\\r|\\n/).filter(val => {\n        return val.length > 0;\n      });\n      return lines;\n    });\n  }\n\n  static getType(line) {\n    const values = line.split(/\\s+/);\n    return values[0];\n  }\n\n  static getValue(line) {\n    const values = line.split(/\\s+/);\n    return values.slice(1);\n  }\n\n}\n\n//# sourceURL=webpack://threejs-particle-waypoint/./esm/ParticleWayBuilder.js?");

/***/ }),

/***/ "./esm/ThreeParticle.js":
/*!******************************!*\
  !*** ./esm/ThreeParticle.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThreeParticle\": () => (/* binding */ ThreeParticle)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\n\nclass ThreeParticle extends particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.Particle {\n  init(parent, texturePath, scale) {\n    if (ThreeParticle.loader == null) {\n      ThreeParticle.loader = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader();\n    }\n\n    this.parent = parent;\n    const map = ThreeParticle.loader.load(texturePath, texture => {\n      if (this.sprite == null) return;\n      this.sprite.scale.set(texture.image.width * scale, texture.image.height * scale, 1.0);\n    });\n    const mat = new three__WEBPACK_IMPORTED_MODULE_1__.SpriteMaterial({\n      map: map,\n      depthTest: false\n    });\n    this.sprite = new three__WEBPACK_IMPORTED_MODULE_1__.Sprite(mat);\n    this.parent.add(this.sprite);\n  }\n\n  update(t) {\n    const n = super.update(t);\n    const pos = this.path.getPoint(n);\n    this.sprite.position.set(pos[0], pos[1], pos[2]);\n    return n;\n  }\n\n  dispose() {\n    super.dispose();\n\n    if (this.parent && this.sprite.parent) {\n      this.sprite.parent.remove(this.sprite);\n    }\n\n    this.parent = null;\n    this.sprite = null;\n  }\n\n}\n\n//# sourceURL=webpack://threejs-particle-waypoint/./esm/ThreeParticle.js?");

/***/ }),

/***/ "./esm/ThreeParticleGenerator.js":
/*!***************************************!*\
  !*** ./esm/ThreeParticleGenerator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThreeParticleGenerator\": () => (/* binding */ ThreeParticleGenerator)\n/* harmony export */ });\n/* harmony import */ var _ThreeParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreeParticle */ \"./esm/ThreeParticle.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\n\nclass ThreeParticleGenerator extends particle_waypoint__WEBPACK_IMPORTED_MODULE_1__.ParticleGenerator {\n  constructor(parent, path, texturePath, scale, option) {\n    super(path, option);\n    this.textureCounter = 0;\n    this.parent = parent;\n    this.scale = scale;\n\n    if (Array.isArray(texturePath)) {\n      this.texturePath = texturePath;\n    } else {\n      this.texturePath = [texturePath];\n    }\n  }\n\n  generateParticle(path) {\n    const particle = new _ThreeParticle__WEBPACK_IMPORTED_MODULE_0__.ThreeParticle(path);\n    particle.init(this.parent, this.texturePath[this.textureCounter], this.scale);\n    this.textureCounter = (this.textureCounter += 1) % this.texturePath.length;\n    return particle;\n  }\n\n  generateAll() {\n    this.textureCounter = 0;\n    super.generateAll();\n  }\n\n}\n\n//# sourceURL=webpack://threejs-particle-waypoint/./esm/ThreeParticleGenerator.js?");

/***/ }),

/***/ "./esm/index.js":
/*!**********************!*\
  !*** ./esm/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OBJLineType\": () => (/* reexport safe */ _ParticleWayBuilder__WEBPACK_IMPORTED_MODULE_0__.OBJLineType),\n/* harmony export */   \"ParticleWayBuilder\": () => (/* reexport safe */ _ParticleWayBuilder__WEBPACK_IMPORTED_MODULE_0__.ParticleWayBuilder),\n/* harmony export */   \"ThreeParticle\": () => (/* reexport safe */ _ThreeParticle__WEBPACK_IMPORTED_MODULE_1__.ThreeParticle),\n/* harmony export */   \"ThreeParticleGenerator\": () => (/* reexport safe */ _ThreeParticleGenerator__WEBPACK_IMPORTED_MODULE_2__.ThreeParticleGenerator)\n/* harmony export */ });\n/* harmony import */ var _ParticleWayBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParticleWayBuilder */ \"./esm/ParticleWayBuilder.js\");\n/* harmony import */ var _ThreeParticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreeParticle */ \"./esm/ThreeParticle.js\");\n/* harmony import */ var _ThreeParticleGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThreeParticleGenerator */ \"./esm/ThreeParticleGenerator.js\");\n\n\n\n\n//# sourceURL=webpack://threejs-particle-waypoint/./esm/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demo": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./demoSrc/demo.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthreejs_particle_waypoint"] = self["webpackChunkthreejs_particle_waypoint"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;