import { sum, substract } from "../src/calculator";

test("sum of 1 and 5 to be 6", () => {
  expect(sum(1, 5)).toBe(6);
});

test("substaction of 10 and 5 to be 5", () => {
  expect(substract(10, 5)).toBe(5);
});
