import { Person } from "../models/Person";
import {
  generateRandomEvenNumber,
  generateRandomOddNumber,
  padZeros
} from "../utils/generateRandomNumberBetweenRange";

export const generateCPR = (person: Person | null, dateOfBirth: Date) => {
  let personToGetCPR: Person;
  // the following logic is stupid,
  // but I did it because it is a requirement to
  // generate CPRs even without a person...
  if (person === null) {
    personToGetCPR = {
      firstName: "",
      lastName: "",
      gender: Date.now() % 2 == 1 ? "male" : "female"
    };
  } else {
    personToGetCPR = person;
  }

  const CPRDate = dateOfBirth
    .toLocaleDateString("en-GB", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit"
    })
    .replaceAll("/", "");
  let randomNumber =
    personToGetCPR.gender === "male"
      ? generateRandomOddNumber(0, 9999)
      : generateRandomEvenNumber(0, 9999);
  return `${CPRDate}-${padZeros(randomNumber, 4)}`;
};
