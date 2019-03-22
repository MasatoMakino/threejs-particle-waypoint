import { ParticleWay } from "particle-waypoint";
export declare enum OBJLineType {
    COMMENT = "#",
    NAME = "o",
    VALUE = "v"
}
export declare class ParticleWayBuilder {
    /**
     *  指定されたOBJファイルから、ParticleWayの配列を取り出す。
     * @param objFilePath
     * @param isClosed オプション クローズパスの場合にはtrueを指定する
     */
    static build(objFilePath: string, isClosed?: boolean): Promise<ParticleWay[]>;
    private static push;
    private static getText;
    private static getType;
    private static getValue;
}
//# sourceMappingURL=ParticleWayBuilder.d.ts.map