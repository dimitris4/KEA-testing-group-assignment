import { generateAddress } from "../src/generateMethods/generateAddress";

test('', () => {
    return expect(generateAddress()).resolves.toBe('asdasdasd');
  });