import { generatePhoneNumber } from "../src/generateMethods/generatePhoneNumber";
import { Person } from "../src/models/Person";

test("check that generated phone number is of type string", () => {
  const generatedPhoneNumber = generatePhoneNumber(null);
  expect(typeof generatedPhoneNumber).toBe("string");
});

test("check that phone number has 8 digits where person is null", () => {
  const generatedPhoneNumber = generatePhoneNumber(null);
  const nrOfDigits = generatedPhoneNumber.length;
  expect(nrOfDigits).toBe(8);
});

test("check that phone number has 8 digits where person is created", () => {
  const person: Person = {
    firstName: "Annemette P.",
    lastName: "Nilsson",
    gender: "female"
  };

  const generatedPhoneNumber = generatePhoneNumber(person);
  const nrOfDigits = generatedPhoneNumber.length;
  expect(nrOfDigits).toBe(8);
});

test("test function 100000 and check that it always returns a phone number with 8 digits", () => {
  let allTestsPassed = true;
  for (let index = 0; index < 100000; index++) {
    const generatedPhoneNumber = generatePhoneNumber(null);
    if (generatedPhoneNumber.length != 8) {
      allTestsPassed = false;
      break;
    }
  }
  expect(allTestsPassed).toBe(true);
});

test("check that number consists of numeric digits", () => {
  const generatedPhoneNumber = generatePhoneNumber(null);
  expect(generatedPhoneNumber).toMatch(/^[0-9]+$/);
});

test("check that number consists of numeric digits", () => {
  const generatedPhoneNumber = generatePhoneNumber(null);
  expect(generatedPhoneNumber).toMatch(/^[0-9]+$/);
});

test("two different phone numbers should not be identical", () => {
  const generatedPhoneNumber1 = generatePhoneNumber(null);
  const generatedPhoneNumber2 = generatePhoneNumber(null);
  expect(generatedPhoneNumber1).not.toEqual(generatedPhoneNumber2);
});

test("check if phone number starts with defined numeric digits", () => {
  const startDigits = [
    "2",
    "30",
    "31",
    "40",
    "41",
    "42",
    "50",
    "51",
    "52",
    "53",
    "60",
    "61",
    "71",
    "81",
    "91",
    "92",
    "93",
    "342",
    "344",
    "345",
    "346",
    "347",
    "348",
    "349",
    "356",
    "357",
    "359",
    "362",
    "365",
    "366",
    "389",
    "398",
    "431",
    "441",
    "462",
    "466",
    "468",
    "472",
    "474",
    "476",
    "478",
    "485",
    "486",
    "488",
    "489",
    "493",
    "494",
    "495",
    "496",
    "498",
    "499",
    "542",
    "543",
    "545",
    "551",
    "552",
    "556",
    "571",
    "572",
    "573",
    "574",
    "577",
    "579",
    "584",
    "586",
    "587",
    "589",
    "597",
    "598",
    "627",
    "629",
    "641",
    "649",
    "658",
    "662",
    "663",
    "664",
    "665",
    "667",
    "692",
    "693",
    "694",
    "697",
    "771",
    "772",
    "782",
    "783",
    "785",
    "786",
    "788",
    "789",
    "826",
    "827",
    "829"
  ];

  const generatedPhoneNumber = generatePhoneNumber(null);
  const getFirstDigit = generatedPhoneNumber.substring(0, 1);
  const getFirstTwoDigits = generatedPhoneNumber.substring(0, 2);
  const getFirstThreeDigits = generatedPhoneNumber.substring(0, 3);
  const doesPhoneNumberContainStartDigits =
    startDigits.includes(getFirstDigit) ||
    startDigits.includes(getFirstTwoDigits) ||
    startDigits.includes(getFirstThreeDigits);

  expect(doesPhoneNumberContainStartDigits).toBeTruthy();
});
