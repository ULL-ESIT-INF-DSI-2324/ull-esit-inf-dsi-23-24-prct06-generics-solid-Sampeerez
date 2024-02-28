import "mocha";
import { expect } from "chai";
import { Complex } from "../src/ejercicio-1-clase/Complex";
import { Rational } from "../src/ejercicio-1-clase/Rational";
import { ArithmeticableCollection } from "../src/ejercicio-1-clase/ArithmeticableCollection";

describe("Ejercicio-1-clase", () => {
  describe("Rational tests", () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);

    it("should add two rational numbers: 1/2 + 3/4 = 5/4", () => {
      const result = rational1.add(rational1, rational2);
      expect(result.numerator).to.equal(5);
      expect(result.denominator).to.equal(4);
    });

    it("should subtract two rational numbers: 1/2 - 3/4 = -1/4", () => {
      const result = rational1.substract(rational1, rational2);
      expect(result.numerator).to.equal(-1);
      expect(result.denominator).to.equal(4);
    });

    it("should multiply two rational numbers: 1/2 x 3/4 = 3/8", () => {
      const result = rational1.multiply(rational1, rational2);
      expect(result.numerator).to.equal(3);
      expect(result.denominator).to.equal(8);
    });

    it("should divide two rational numbers: 1/2 / 3/4 = 2/3", () => {
      const result = rational1.divide(rational1, rational2);
      expect(result.numerator).to.equal(2);
      expect(result.denominator).to.equal(3);
    });
  });

  describe("Complex tests", () => {
    const complex1 = new Complex(1, 2);
    const complex2 = new Complex(3, 4);

    it("should add two complex numbers: (1 + 2i) + (3 + 4i) = 4 + 6i", () => {
      const result = complex1.add(complex1, complex2);
      expect(result.real).to.equal(4);
      expect(result.imaginary).to.equal(6);
    });

    it("should substract two complex numbers: (1 + 2i) - (3 + 4i) = -2 - 2i", () => {
      const result = complex1.substract(complex1, complex2);
      expect(result.real).to.equal(-2);
      expect(result.imaginary).to.equal(-2);
    });

    it("should multiply two complex numbers: (1 + 2i) x (3 + 4i) = -5 + 10i", () => {
      const result = complex1.multiply(complex1, complex2);
      expect(result.real).to.equal(-5);
      expect(result.imaginary).to.equal(10);
    });
  });

  describe("ArithmeticableCollection tests", () => {
    const complexCollection = new ArithmeticableCollection<Complex>();
    const rationalCollection = new ArithmeticableCollection<Rational>();

    it("should add an element to the complex collection: new Complex(1, 2)", () => {
      complexCollection.addArithmeticable(new Complex(1, 2));
      expect(complexCollection.getNumberOfArithmeticables()).to.equal(1);
    });

    it("should get an element from the complex collection: getArithmeticable(0) = 1 + 2i", () => {
      const element = complexCollection.getArithmeticable(0);
      expect(element!.real).to.equal(1);
      expect(element!.imaginary).to.equal(2);
    });

    it("should add an element to the rational collection: new Rational(1, 2)", () => {
      rationalCollection.addArithmeticable(new Rational(1, 2));
      expect(rationalCollection.getNumberOfArithmeticables()).to.equal(1);
    });

    it("should get an element from the rational collection: getArithmeticable(0) = 1/2", () => {
      const element = rationalCollection.getArithmeticable(0);
      expect(element!.numerator).to.equal(1);
      expect(element!.denominator).to.equal(2);
    });
  });
});
