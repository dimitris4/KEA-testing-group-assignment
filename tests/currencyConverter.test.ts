import { convertCurrency } from "../src/converters/currencyConverter";

test('USD to DKK', () => {
  expect.assertions(1);
  return expect(convertCurrency('DKK')).resolves.toBeCloseTo(6.72156, 0);
});

test('USD to EUR', () => {
  expect.assertions(1);
  return expect(convertCurrency('EUR')).resolves.toBeCloseTo(0.91, 0);
});

test('USD to SEK', () => {
  expect.assertions(1);
  return expect(convertCurrency('SEK')).resolves.toBeCloseTo(9.69, 0);
});

test('USD to JPY', () => {
  expect.assertions(1);
  return expect(convertCurrency('JPY')).resolves.toBeCloseTo(117.5, 0);
});