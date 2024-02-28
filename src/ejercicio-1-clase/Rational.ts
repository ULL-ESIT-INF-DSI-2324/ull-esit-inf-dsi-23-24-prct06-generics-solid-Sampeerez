import { Arithmeticable } from "./Arithmeticable";

export class Rational implements Arithmeticable<Rational> {
  constructor(
    public numerator: number,
    public denominator: number,
  ) {}

  private mcd(first_number: number, second_number: number): number {
    return second_number === 0
      ? first_number
      : this.mcd(second_number, first_number % second_number);
  }

  private simplify(): void {
    const divisor = this.mcd(
      Math.abs(this.numerator),
      Math.abs(this.denominator),
    );
    this.numerator /= divisor;
    this.denominator /= divisor;
  }

  add = (first_rational: Rational, second_rational: Rational): Rational => {
    const result = new Rational(
      first_rational.numerator * second_rational.denominator +
        second_rational.numerator * first_rational.denominator,
      first_rational.denominator * second_rational.denominator,
    );
    result.simplify();
    return result;
  };

  substract = (
    first_rational: Rational,
    second_rational: Rational,
  ): Rational => {
    const result = new Rational(
      first_rational.numerator * second_rational.denominator -
        second_rational.numerator * first_rational.denominator,
      first_rational.denominator * second_rational.denominator,
    );
    result.simplify();
    return result;
  };

  multiply = (
    first_rational: Rational,
    second_rational: Rational,
  ): Rational => {
    const result = new Rational(
      first_rational.numerator * second_rational.numerator,
      first_rational.denominator * second_rational.denominator,
    );
    result.simplify();
    return result;
  };

  divide = (first_rational: Rational, second_rational: Rational): Rational => {
    const result = new Rational(
      first_rational.numerator * second_rational.denominator,
      first_rational.denominator * second_rational.numerator,
    );
    result.simplify();
    return result;
  };
}
