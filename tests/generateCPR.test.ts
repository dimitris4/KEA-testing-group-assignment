import { generateCPR } from "../src/generateMethods/generateCPR";
import {generateBirthDate} from "../src/generateMethods/generateBirthDate"
import {Person} from "../src/models/Person"
  test("check that phone number has 8 digits where person is null", () => {
    const generatedCPR = generateCPR(null, generateBirthDate());
    const nrOfCharacters = generatedCPR.length;
    expect(nrOfCharacters).toBe(11);
  });
  test("check that day of birth is between 1 and 30 inclusive", () => {
    const generatedCPR = generateCPR(null, generateBirthDate());
    const dates = parseInt(generatedCPR.substring(0,2));
    const check = (dates >= 1 && dates <= 30);
    expect(check).toBe(true);
  });
  
  test("check that month of birth is between 0 and 99 inclusive", () => {
    const generatedCPR = generateCPR(null, generateBirthDate());
    const year = parseInt(generatedCPR.substring(4,6));
    const check = (year >= 0 && year <= 99);
    expect(check).toBe(true);
  });

  
  test("check if inserted person is female", () => {
    const person: Person = {
              firstName: "Annemette P.",
              lastName: "Nilsson",
              gender: "female"
            };
    const generatedCPR = generateCPR(person, generateBirthDate());
    const ifFemale = parseInt(generatedCPR.substring(10,11));
    const result = ifFemale % 2 ;
    expect(result).toBe(0);
  });

  test("check if inserted person is male", () => {
    const person: Person = {
              firstName: "Annemette P.",
              lastName: "Nilsson",
              gender: "male"
            };
    const generatedCPR = generateCPR(person, generateBirthDate());
    const ifMale = parseInt(generatedCPR.substring(10,11));
    const result = ifMale % 2 ;
    expect(result).toBe(1);
  });






//   test("check that phone number has 8 digits where person is null", () => {
//     const generatedCPR = generateCPR(null);
//     const year = generatedCPR.substring(9,11);
//     expect(nrOfCharacters).toBe(11);
//   });



//   test("check that phone number has 8 digits where person is created", () => {
//     const person: Person = {
//       firstName: "Annemette P.",
//       lastName: "Nilsson",
//       gender: "female"
//     };
  