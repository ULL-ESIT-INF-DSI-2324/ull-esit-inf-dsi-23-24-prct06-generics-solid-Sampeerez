import * as fs from "fs";

import { IFileWriter } from "./FileActionsInterface";

export class FileWriter implements IFileWriter {
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error(
        "Error al escribir en el archivo:",
        (error as Error).message,
      );
    }
  }
}
