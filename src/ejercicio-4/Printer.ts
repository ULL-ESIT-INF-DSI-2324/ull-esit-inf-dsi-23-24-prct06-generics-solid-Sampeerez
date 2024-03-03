import { Printable } from "./ScannablePrintable";

export class Printer implements Printable {
  print(): void {
    console.log("Printing...");
  }
}
