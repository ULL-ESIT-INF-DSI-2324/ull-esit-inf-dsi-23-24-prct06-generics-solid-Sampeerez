import { Scannable } from "./ScannablePrintable";

export class Scanner implements Scannable {
  scan(): void {
    console.log("Scanning...");
  }
}
