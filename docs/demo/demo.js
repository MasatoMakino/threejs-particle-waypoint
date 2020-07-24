/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"demo": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./demoSrc/demo.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demoSrc/demo.js":
/*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ \"./esm/index.js\");\n\n\n\nconst W = 800;\nconst H = 600;\nlet renderer;\nlet scene;\nlet camera;\n\nconst onDomContentsLoaded = () => {\n  initScene();\n  initWaypoint();\n  render();\n};\n\nconst initScene = () => {\n  // シーンを作成\n  scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n  camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, W / H, 1, 400);\n  camera.position.set(0, 0, 50);\n  scene.add(camera);\n  const renderOption = {\n    canvas: document.getElementById(\"webgl-canvas\"),\n    antialias: true\n  };\n  renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"](renderOption);\n  renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x000000));\n  renderer.setSize(W, H);\n  renderer.setPixelRatio(window.devicePixelRatio); //平行光源オブジェクト(light)の設定\n\n  const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0xffffff, 1.0);\n  scene.add(ambientLight);\n};\n\nconst initWaypoint = () => {\n  const path = new particle_waypoint__WEBPACK_IMPORTED_MODULE_1__[\"ParticleWay\"]([[0.0, 0.0, 0.0], [0.0, 10.0, 0.0], [10.0, 10.0, 0.0], [10.0, 10.0, 10.0], [0.0, 10.0, 10.0], [10.0, 0.0, 10.0]]);\n  const generator = new ___WEBPACK_IMPORTED_MODULE_2__[\"ThreeParticleGenerator\"](scene, path, [\"./map01.png\", \"./map02.png\", \"./map03.png\", \"./map04.png\"], 0.005, {\n    isLoop: true\n  });\n  generator.setInterval(0.08, 4 * 8);\n  generator.play();\n};\n\nconst render = () => {\n  renderer.render(scene, camera);\n  requestAnimationFrame(render);\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nwindow.onload = onDomContentsLoaded;\n\n//# sourceURL=webpack:///./demoSrc/demo.js?");

/***/ }),

/***/ "./esm/ParticleWayBuilder.js":
/*!***********************************!*\
  !*** ./esm/ParticleWayBuilder.js ***!
  \***********************************/
/*! exports provided: OBJLineType, ParticleWayBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OBJLineType\", function() { return OBJLineType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParticleWayBuilder\", function() { return ParticleWayBuilder; });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\n\nvar OBJLineType;\n\n(function (OBJLineType) {\n  OBJLineType[\"COMMENT\"] = \"#\";\n  OBJLineType[\"NAME\"] = \"o\";\n  OBJLineType[\"VALUE\"] = \"v\";\n})(OBJLineType || (OBJLineType = {}));\n\nclass ParticleWayBuilder {\n  /**\n   *  指定されたOBJファイルから、ParticleWayの配列を取り出す。\n   * @param objFilePath\n   * @param isClosed オプション クローズパスの場合にはtrueを指定する\n   */\n  static build(objFilePath, isClosed = false) {\n    return __awaiter(this, void 0, void 0, function* () {\n      const lines = yield this.getText(objFilePath);\n      let pathName = \"\";\n      let currentPath;\n      const pathArray = [];\n      lines.forEach(line => {\n        const type = this.getType(line);\n        const value = this.getValue(line);\n\n        switch (type) {\n          case OBJLineType.NAME:\n            this.push(currentPath, pathName, pathArray, isClosed);\n            currentPath = [];\n            pathName = value[0];\n            break;\n\n          case OBJLineType.VALUE:\n            const points = value.map(val => {\n              return parseFloat(val);\n            });\n            currentPath.push(points);\n            break;\n        }\n      }); //まだ格納していない処理中のパスを格納。\n\n      this.push(currentPath, pathName, pathArray, isClosed);\n      return pathArray;\n    });\n  }\n\n  static push(currentPath, pathName, pathArray, isClosed) {\n    if (currentPath == null) return;\n\n    if (isClosed) {\n      currentPath.push([...currentPath[0]]);\n    }\n\n    const path = new particle_waypoint__WEBPACK_IMPORTED_MODULE_0__[\"ParticleWay\"](currentPath);\n    path.name = pathName;\n    pathArray.push(path);\n  }\n\n  static getText(objFilePath) {\n    return __awaiter(this, void 0, void 0, function* () {\n      const response = yield fetch(objFilePath);\n      const txt = yield response.text();\n      const lines = txt.split(/\\r\\n|\\r|\\n/).filter(val => {\n        return val.length > 0;\n      });\n      return lines;\n    });\n  }\n\n  static getType(line) {\n    const values = line.split(/\\s+/);\n    return values[0];\n  }\n\n  static getValue(line) {\n    const values = line.split(/\\s+/);\n    return values.slice(1);\n  }\n\n}\n\n//# sourceURL=webpack:///./esm/ParticleWayBuilder.js?");

/***/ }),

/***/ "./esm/ThreeParticle.js":
/*!******************************!*\
  !*** ./esm/ThreeParticle.js ***!
  \******************************/
/*! exports provided: ThreeParticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeParticle\", function() { return ThreeParticle; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\n\nclass ThreeParticle extends particle_waypoint__WEBPACK_IMPORTED_MODULE_1__[\"Particle\"] {\n  init(parent, texturePath, scale) {\n    if (ThreeParticle.loader == null) {\n      ThreeParticle.loader = new three__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]();\n    }\n\n    this.parent = parent;\n    const map = ThreeParticle.loader.load(texturePath, texture => {\n      if (this.sprite == null) return;\n      this.sprite.scale.set(texture.image.width * scale, texture.image.height * scale, 1.0);\n    });\n    const mat = new three__WEBPACK_IMPORTED_MODULE_0__[\"SpriteMaterial\"]({\n      map: map,\n      depthTest: false\n    });\n    this.sprite = new three__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"](mat);\n    this.parent.add(this.sprite);\n  }\n\n  update(t) {\n    const n = super.update(t);\n    const pos = this.path.getPoint(n);\n    this.sprite.position.set(pos[0], pos[1], pos[2]);\n    return n;\n  }\n\n  dispose() {\n    super.dispose();\n\n    if (this.parent && this.sprite.parent) {\n      this.sprite.parent.remove(this.sprite);\n    }\n\n    this.parent = null;\n    this.sprite = null;\n  }\n\n}\n\n//# sourceURL=webpack:///./esm/ThreeParticle.js?");

/***/ }),

/***/ "./esm/ThreeParticleGenerator.js":
/*!***************************************!*\
  !*** ./esm/ThreeParticleGenerator.js ***!
  \***************************************/
/*! exports provided: ThreeParticleGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeParticleGenerator\", function() { return ThreeParticleGenerator; });\n/* harmony import */ var _ThreeParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreeParticle */ \"./esm/ThreeParticle.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\n\nclass ThreeParticleGenerator extends particle_waypoint__WEBPACK_IMPORTED_MODULE_1__[\"ParticleGenerator\"] {\n  constructor(parent, path, texturePath, scale, option) {\n    super(path, option);\n    this.textureCounter = 0;\n    this.parent = parent;\n    this.scale = scale;\n\n    if (Array.isArray(texturePath)) {\n      this.texturePath = texturePath;\n    } else {\n      this.texturePath = [texturePath];\n    }\n  }\n\n  generateParticle(path) {\n    const particle = new _ThreeParticle__WEBPACK_IMPORTED_MODULE_0__[\"ThreeParticle\"](path);\n    particle.init(this.parent, this.texturePath[this.textureCounter], this.scale);\n    this.textureCounter = (this.textureCounter += 1) % this.texturePath.length;\n    return particle;\n  }\n\n  generateAll() {\n    this.textureCounter = 0;\n    super.generateAll();\n  }\n\n}\n\n//# sourceURL=webpack:///./esm/ThreeParticleGenerator.js?");

/***/ }),

/***/ "./esm/index.js":
/*!**********************!*\
  !*** ./esm/index.js ***!
  \**********************/
/*! exports provided: OBJLineType, ParticleWayBuilder, ThreeParticle, ThreeParticleGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ParticleWayBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParticleWayBuilder */ \"./esm/ParticleWayBuilder.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"OBJLineType\", function() { return _ParticleWayBuilder__WEBPACK_IMPORTED_MODULE_0__[\"OBJLineType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ParticleWayBuilder\", function() { return _ParticleWayBuilder__WEBPACK_IMPORTED_MODULE_0__[\"ParticleWayBuilder\"]; });\n\n/* harmony import */ var _ThreeParticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreeParticle */ \"./esm/ThreeParticle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ThreeParticle\", function() { return _ThreeParticle__WEBPACK_IMPORTED_MODULE_1__[\"ThreeParticle\"]; });\n\n/* harmony import */ var _ThreeParticleGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThreeParticleGenerator */ \"./esm/ThreeParticleGenerator.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ThreeParticleGenerator\", function() { return _ThreeParticleGenerator__WEBPACK_IMPORTED_MODULE_2__[\"ThreeParticleGenerator\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./esm/index.js?");

/***/ })

/******/ });