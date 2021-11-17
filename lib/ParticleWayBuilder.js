"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticleWayBuilder = exports.OBJLineType = void 0;
const particle_waypoint_1 = require("particle-waypoint");
var OBJLineType;
(function (OBJLineType) {
    OBJLineType["COMMENT"] = "#";
    OBJLineType["NAME"] = "o";
    OBJLineType["VALUE"] = "v";
})(OBJLineType = exports.OBJLineType || (exports.OBJLineType = {}));
class ParticleWayBuilder {
    /**
     *  指定されたOBJファイルから、ParticleWayの配列を取り出す。
     * @param objFilePath
     * @param isClosed オプション クローズパスの場合にはtrueを指定する
     */
    static build(objFilePath, isClosed = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const lines = yield this.getText(objFilePath);
            let pathName = "";
            let currentPath;
            const pathArray = [];
            lines.forEach((line) => {
                const type = this.getType(line);
                const value = this.getValue(line);
                switch (type) {
                    case OBJLineType.NAME:
                        this.push(currentPath, pathName, pathArray, isClosed);
                        currentPath = [];
                        pathName = value[0];
                        break;
                    case OBJLineType.VALUE:
                        const points = value.map((val) => {
                            return parseFloat(val);
                        });
                        currentPath.push(points);
                        break;
                }
            });
            //まだ格納していない処理中のパスを格納。
            this.push(currentPath, pathName, pathArray, isClosed);
            return pathArray;
        });
    }
    static push(currentPath, pathName, pathArray, isClosed) {
        if (currentPath == null)
            return;
        if (isClosed) {
            currentPath.push([...currentPath[0]]);
        }
        const path = new particle_waypoint_1.ParticleWay(currentPath);
        path.name = pathName;
        pathArray.push(path);
    }
    static getText(objFilePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(objFilePath);
            const txt = yield response.text();
            const lines = txt.split(/\r\n|\r|\n/).filter((val) => {
                return val.length > 0;
            });
            return lines;
        });
    }
    static getType(line) {
        const values = line.split(/\s+/);
        return values[0];
    }
    static getValue(line) {
        const values = line.split(/\s+/);
        return values.slice(1);
    }
}
exports.ParticleWayBuilder = ParticleWayBuilder;
