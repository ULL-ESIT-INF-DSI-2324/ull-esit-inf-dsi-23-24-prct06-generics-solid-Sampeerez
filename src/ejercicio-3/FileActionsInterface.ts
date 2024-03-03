export interface IFileReader {
  readFile(filePath: string): string;
}

export interface IFileWriter {
  writeFile(filePath: string, data: string): void;
}
