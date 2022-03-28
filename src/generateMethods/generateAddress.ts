import * as MySQLConnector from "../utils/mysql.connector";
import { execute } from "./../utils/mysql.connector";
import { generateRandomNumber } from "../utils/generateRandomNumberBetweenRange";
import { Address } from "../models/Address";
// create database pool
const generateStreet = () => {
  let results = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  while (results.length !== 30) {
    results += characters.charAt(generateRandomNumber(0, characters.length));
  }
  return results;
};

const generateStreetNumber = () => {
  return generateRandomNumber(1, 999);
};

const generateFloor = () => {
  const result = generateRandomNumber(0, 99);
  if (result === 0) {
    return "st";
  } else {
    return result + "";
  }
};

const generateDoor = () => {
  const sideDoor = ["th", "mf", "tv"];
  const initialDoorNumber = generateRandomNumber(1, 50);
  return (
    sideDoor[generateRandomNumber(0, 2)] + " " + Math.round(initialDoorNumber)
  );
};

const getRandomPostalCodeAsync: any = async () => {
  try {
    MySQLConnector.init();

    const response = await execute<any>(
      `
    SELECT *
    FROM postal_code
    ORDER BY RAND()
    LIMIT 1;
  `,
      []
    );
    return { postalCode: response[0].cPostalCode, town: response[0].cTownName };
  } catch (error) {
    console.error(
      "Error! ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
  }
};

export const generateAddress = async () => {
  const getRandomPostalCode = await getRandomPostalCodeAsync();
  let returnObject: Address = {
    street: generateStreet(),
    streetNumber: generateStreetNumber(),
    floor: generateFloor(),
    door: generateDoor(),
    postalCode: getRandomPostalCode
  };
  return returnObject;
};
