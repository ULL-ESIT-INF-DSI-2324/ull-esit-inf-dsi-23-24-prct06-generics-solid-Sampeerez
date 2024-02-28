import { Arithmeticable } from "./Arithmeticable";

export class Complex implements Arithmeticable<Complex> {
  constructor(
    public real: number,
    public imaginary: number,
  ) {}

  add = (first_complex: Complex, second_complex: Complex): Complex =>
    new Complex(
      first_complex.real + second_complex.real,
      first_complex.imaginary + second_complex.imaginary,
    );

  substract = (first_complex: Complex, second_complex: Complex): Complex =>
    new Complex(
      first_complex.real - second_complex.real,
      first_complex.imaginary - second_complex.imaginary,
    );

  multiply = (first_complex: Complex, second_complex: Complex): Complex =>
    new Complex(
      first_complex.real * second_complex.real -
        first_complex.imaginary * second_complex.imaginary,
      first_complex.real * second_complex.imaginary +
        first_complex.imaginary * second_complex.real,
    );

  divide = (first_complex: Complex, second_complex: Complex): Complex => {
    const denominator =
      second_complex.real * second_complex.real +
      second_complex.imaginary * second_complex.imaginary;
    return new Complex(
      (first_complex.real * second_complex.real +
        first_complex.imaginary * second_complex.imaginary) /
        denominator,
      (first_complex.imaginary * second_complex.real -
        first_complex.real * second_complex.imaginary) /
        denominator,
    );
  };
}
