import { getGradeByNameAsync } from "../src/converters/gradesConverter";

test('12 in Denmark should be A+ in USA', () => {
  expect.assertions(1);
  return expect(getGradeByNameAsync('da', '12')).resolves.toBe('A+');
});

test('10 in Denmark should be A in USA', () => {
  expect.assertions(1);
  return expect(getGradeByNameAsync('da', '10')).resolves.toBe('A');
});

test('7 in Denmark should be B in USA', () => {
  expect.assertions(1);
  return expect(getGradeByNameAsync('da', '7')).resolves.toBe('B');
});

test('4 in Denmark should be C in USA', () => {
  expect.assertions(1);
  return expect(getGradeByNameAsync('da', '4')).resolves.toBe('C');
});

test('02 in Denmark should be D in USA', () => {
  expect.assertions(1);
  return expect(getGradeByNameAsync('da', '02')).resolves.toBe('D');
});

test('00 in Denmark should be F in USA', () => {
  expect.assertions(1);
  return expect(getGradeByNameAsync('da', '00')).resolves.toBe('F');
});

test('-3 in Denmark should be F in USA', () => {
  expect.assertions(1);
  return expect(getGradeByNameAsync('da', '-3')).resolves.toBe('F');
});

test('A+ in USA should be 12 in Denmark', () => {
  expect.assertions(1);
  return expect(getGradeByNameAsync('us', 'A+')).resolves.toBe('12');
});

test('F in USA should be 00 in Denmark', () => {
  expect.assertions(1);
  return expect(getGradeByNameAsync('us', 'F')).resolves.toBe('00');
});