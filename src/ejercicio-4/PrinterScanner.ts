import { Printable, Scannable } from "./ScannablePrintable";

export class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log("Printing...");
  }

  scan(): void {
    console.log("Scanning...");
  }
}
