import { Arithmeticable } from "./Arithmeticable";

export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  addArithmeticable(element: T): void {
    this.elements.push(element);
  }

  getArithmeticable(index: number): T | undefined {
    return this.elements[index] || undefined;
  }

  getNumberOfArithmeticables(): number {
    return this.elements.length;
  }
}
