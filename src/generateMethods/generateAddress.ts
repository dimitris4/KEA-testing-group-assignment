import * as MySQLConnector from '../utils/mysql.connector';
import { execute } from "./../utils/mysql.connector";

// create database pool
MySQLConnector.init();

export const generateRandomNumber = (min = 0, max = 100) => {
    let difference = max - min + 1;
    let rand = Math.random();
    rand = Math.floor(rand * difference) + min;
    return rand;
}

export const generateStreet = async () => {
    let results = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    while (results.length !== 30) {
        results += characters.charAt(generateRandomNumber(0, characters.length));
    }
    return results;
}

export const generateStreetNumber = () => {
    return generateRandomNumber(1, 999)
}

export const generateFloor = () => {
    const result = generateRandomNumber(0, 99);
    if (result === 0) {
        return "st"
    } else {
        return result + "";
    }
}

export const generateDoor = () => {
    const sideDoor = ["th", "mf", "tv"]
    const initialDoorNumber = generateRandomNumber(1, 50);
    return sideDoor[generateRandomNumber(0, 2)] + " " + Math.round(initialDoorNumber)
}

export const generatePostalCode = async () => {
    let postalCode = [];
    while (!postalCode.length) {
        const getCode = generateRandomNumber(1301, 9990)
        postalCode = await execute("SELECT * from postal_code where cPostalCode=?", getCode) as any;
    }
    return postalCode[0];
}