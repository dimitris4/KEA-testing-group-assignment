import { generatePhoneNumber } from "../generateMethods/generatePhoneNumber";

for (let index = 0; index < 100000; index++) {
  const returnedPhoneNumber = generatePhoneNumber(null);
  if (index == 99999) {
    console.log("ran 99999 tests!");
  }
  if (returnedPhoneNumber.length != 8) {
    console.log(`test failed with result: ${returnedPhoneNumber}`);
    break;
  }
}

console.log("test ran all tests!");
