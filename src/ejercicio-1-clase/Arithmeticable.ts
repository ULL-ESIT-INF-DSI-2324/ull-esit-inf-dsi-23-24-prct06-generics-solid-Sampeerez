export interface Arithmeticable<T> {
  add: (first_number: T, second_number: T) => T;
  substract: (first_number: T, second_number: T) => T;
  multiply: (first_number: T, second_number: T) => T;
  divide: (first_number: T, second_number: T) => T;
}
