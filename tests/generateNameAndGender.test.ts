import {generateNameAndGender} from "../src/generateMethods/generateNameAndGender";

describe("First and Last Name testing", () => {

    test('check that generated first name is of type string', () => {
        let generatedPerson = generateNameAndGender();
        expect(typeof generatedPerson.firstName).toBe("string")
    });

    test('check that generated first name does not contain numbers', () => {
        let generatedPerson = generateNameAndGender();
        expect(generatedPerson.firstName).not.toMatch(/^[0-9]+$/);
    });

    test('check that generated first name is at least one character long', () => {
        let generatedPerson = generateNameAndGender();
        expect(generatedPerson.firstName).not.toHaveLength(0);
    });

    test('check that generated last name is of type string', () => {
        let generatedPerson = generateNameAndGender();
        expect(typeof generatedPerson.lastName).toBe("string")
    });

    test('check that generated last name does not contain numbers', () => {
        let generatedPerson = generateNameAndGender();
        expect(generatedPerson.lastName).not.toMatch(/^[0-9]+$/);
    });

    test('check that generated last name is at least one character long', () => {
        let generatedPerson = generateNameAndGender();
        expect(generatedPerson.lastName).not.toHaveLength(0);
    });
})

describe("Gender testing", () => {

    test('check that generated gender is of type string', () => {
        let generatedPerson = generateNameAndGender();
        expect(typeof generatedPerson.gender).toBe("string")
    });

    test('check that generated gender is either male or female', () => {
        let generatedPerson = generateNameAndGender();
        expect(generatedPerson.gender).toMatch(/^male|female$/);
    });
})
