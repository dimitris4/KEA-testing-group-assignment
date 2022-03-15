import { convertLength } from "../src/converters/lengthConverter";

// Black box techniques...
// Equivalence Partitioning
// cm: valid values [0 - 300] with 2 decimals
// inch: valid values [0 - 118.11] with 2 decimals
test('cm to inch valid value from partition', () => {
  expect(convertLength('cm', 180.00)).toBe(70.87);
});
test('input value with more than 2 decimals', () => {
  expect(convertLength('cm', 180.001)).toBe('Invalid input');
});
test('inch to cm valid value from partition', () => {
  expect(convertLength('inch', 70.87)).toBe(180.01);
});
// Boundary Value Analysis (3 boundary values)
test('cm to inch invalid lower boundary value', () => {
  expect(convertLength('cm', -0.01)).toBe('Invalid input');
});
test('cm to inches lower boundary', () => {
  expect(convertLength('cm', 0)).toBe(0);
});
test('cm to inches valid lower boundary', () => {
  expect(convertLength('cm', 0.01)).toBe(0);
});
test('cm to inches valid upper boundary', () => {
  expect(convertLength('cm', 299.99)).toBe(118.11);
});
test('cm to inches upper boundary', () => {
  expect(convertLength('cm', 300)).toBe(118.11);
});
test('cm to inches invalid upper boundary', () => {
  expect(convertLength('cm', 300.01)).toBe('Invalid input');
});
test('inches to cm invalid lower boundary', () => {
  expect(convertLength('inch', -0.01)).toBe('Invalid input');
});
test('inches to cm lower boundary', () => {
  expect(convertLength('inch', 0)).toBe(0);
});
test('inches to cm valid lower boundary', () => {;
  expect(convertLength('inch', 0.01)).toBe(0.03);
});
test('inches to cm valid upper boundary', () => {
  expect(convertLength('inch', 118.10)).toBe(299.97);
});
test('inches to cm upper boundary', () => {
  expect(convertLength('inch', 118.11)).toBe(300);
});
test('inches to cm invalid upper boundary', () => {
  expect(convertLength('inch', 118.12)).toBe('Invalid input');
});
// Decision Table Testing
// Case1: measureUnit = cm 
// Case2: measureUnit = inch
// The above cases are covered by the tests already.
// State Transition Testing
// I think that STT is not relevant here.
// Use Case Testing
// The use cases are covered by the tests already.
// White box techniques
// Statement coverage 
// The above cases cover 100% of the statements in lengthConverter.ts file.
// Decision coverage
// The above tests cover all decisions in in lengthConverter.ts file.