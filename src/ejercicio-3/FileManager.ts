import { IFileReader, IFileWriter } from "./FileActionsInterface";

export class FileManager {
  private fileReader: IFileReader;
  private fileWriter: IFileWriter;
  private filePath: string;

  constructor(
    filePath: string,
    fileReader: IFileReader,
    fileWriter: IFileWriter,
  ) {
    this.filePath = filePath;
    this.fileReader = fileReader;
    this.fileWriter = fileWriter;
  }

  public setFilePath(filePath: string): void {
    this.filePath = filePath;
  }

  public readFile(): string {
    return this.fileReader.readFile(this.filePath);
  }

  public writeFile(data: string): void {
    this.fileWriter.writeFile(this.filePath, data);
  }
}
