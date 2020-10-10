"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreeParticleGenerator = void 0;
var ThreeParticle_1 = require("./ThreeParticle");
var particle_waypoint_1 = require("particle-waypoint");
var ThreeParticleGenerator = /** @class */ (function (_super) {
    __extends(ThreeParticleGenerator, _super);
    function ThreeParticleGenerator(parent, path, texturePath, scale, option) {
        var _this = _super.call(this, path, option) || this;
        _this.textureCounter = 0;
        _this.parent = parent;
        _this.scale = scale;
        if (Array.isArray(texturePath)) {
            _this.texturePath = texturePath;
        }
        else {
            _this.texturePath = [texturePath];
        }
        return _this;
    }
    ThreeParticleGenerator.prototype.generateParticle = function (path) {
        var particle = new ThreeParticle_1.ThreeParticle(path);
        particle.init(this.parent, this.texturePath[this.textureCounter], this.scale);
        this.textureCounter = (this.textureCounter += 1) % this.texturePath.length;
        return particle;
    };
    ThreeParticleGenerator.prototype.generateAll = function () {
        this.textureCounter = 0;
        _super.prototype.generateAll.call(this);
    };
    return ThreeParticleGenerator;
}(particle_waypoint_1.ParticleGenerator));
exports.ThreeParticleGenerator = ThreeParticleGenerator;
