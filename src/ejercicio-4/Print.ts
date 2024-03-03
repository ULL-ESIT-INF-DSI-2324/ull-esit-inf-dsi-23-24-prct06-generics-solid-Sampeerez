import { Printer } from "./Printer";
import { Scanner } from "./Scanner";
import { PrinterScanner } from "./PrinterScanner";

const printer = new Printer();
printer.print();

const scanner = new Scanner();
scanner.scan();

const printerScanner = new PrinterScanner();
printerScanner.print();
printerScanner.scan();
