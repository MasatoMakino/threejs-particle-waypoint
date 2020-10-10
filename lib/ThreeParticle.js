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
exports.ThreeParticle = void 0;
var three_1 = require("three");
var particle_waypoint_1 = require("particle-waypoint");
var ThreeParticle = /** @class */ (function (_super) {
    __extends(ThreeParticle, _super);
    function ThreeParticle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeParticle.prototype.init = function (parent, texturePath, scale) {
        var _this = this;
        if (ThreeParticle.loader == null) {
            ThreeParticle.loader = new three_1.TextureLoader();
        }
        this.parent = parent;
        var map = ThreeParticle.loader.load(texturePath, function (texture) {
            if (_this.sprite == null)
                return;
            _this.sprite.scale.set(texture.image.width * scale, texture.image.height * scale, 1.0);
        });
        var mat = new three_1.SpriteMaterial({
            map: map,
            depthTest: false,
        });
        this.sprite = new three_1.Sprite(mat);
        this.parent.add(this.sprite);
    };
    ThreeParticle.prototype.update = function (t) {
        var n = _super.prototype.update.call(this, t);
        var pos = this.path.getPoint(n);
        this.sprite.position.set(pos[0], pos[1], pos[2]);
        return n;
    };
    ThreeParticle.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this.parent && this.sprite.parent) {
            this.sprite.parent.remove(this.sprite);
        }
        this.parent = null;
        this.sprite = null;
    };
    return ThreeParticle;
}(particle_waypoint_1.Particle));
exports.ThreeParticle = ThreeParticle;
