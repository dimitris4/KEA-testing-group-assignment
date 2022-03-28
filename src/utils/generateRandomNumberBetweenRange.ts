/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

export const generateRandomEvenNumber = (min = 0, max = 100) => {
  let result = 0;
  while (true) {
    result = generateRandomNumber(min, max);
    if (result % 2 === 0) {
      return result;
    }
  }
};

export const generateRandomOddNumber = (min = 0, max = 100) => {
  let result = 0;
  while (true) {
    result = generateRandomNumber(min, max);
    if (result % 2 !== 0) {
      return result;
    }
  }
};

export const generateRandomNumber = (min = 0, max = 100) => {
  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  return rand + min;
};

export const padZeros = (num: number, size: number) => {
  const s = "000000000" + num;
  return s.substr(s.length - size);
};
