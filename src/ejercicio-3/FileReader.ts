import * as fs from "fs";

import { IFileReader } from "./FileActionsInterface";

export class FileReader implements IFileReader {
  public readFile(filePath: string): string {
    try {
      const content: string = fs.readFileSync(filePath, "utf-8");
      return content;
    } catch (error) {
      console.error(
        "Error al escribir en el archivo:",
        (error as Error).message,
      );
      return "";
    }
  }
}
