import { ParticleWay } from "@masatomakino/particle-waypoint";

export enum OBJLineType {
  COMMENT = "#",
  NAME = "o",
  VALUE = "v",
}

export class ParticleWayBuilder {
  /**
   *  指定されたOBJファイルから、ParticleWayの配列を取り出す。
   * @param objFilePath
   * @param isClosed オプション クローズパスの場合にはtrueを指定する
   */
  public static async build(objFilePath: string, isClosed: boolean = false) {
    const lines = await this.getText(objFilePath);

    let pathName: string = "";
    let currentPath: number[][];
    const pathArray: ParticleWay[] = [];

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
  }

  private static push(
    currentPath: number[][],
    pathName: string,
    pathArray: ParticleWay[],
    isClosed: boolean
  ) {
    if (currentPath == null) return;

    if (isClosed) {
      currentPath.push([...currentPath[0]]);
    }
    const path = new ParticleWay(currentPath);
    path.name = pathName;
    pathArray.push(path);
  }

  private static async getText(objFilePath: string) {
    const response = await fetch(objFilePath);
    const txt = await response.text();
    const lines: string[] = txt.split(/\r\n|\r|\n/).filter((val) => {
      return val.length > 0;
    });
    return lines;
  }

  private static getType(line: string): OBJLineType {
    const values: string[] = line.split(/\s+/);
    return values[0] as OBJLineType;
  }

  private static getValue(line: string): string[] {
    const values: string[] = line.split(/\s+/);
    return values.slice(1);
  }
}
