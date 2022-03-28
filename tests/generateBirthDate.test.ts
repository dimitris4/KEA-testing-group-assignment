import {generateBirthDate} from "../src/generateMethods/generateBirthDate";

describe("Birth Date testing", () => {
    test('check that generated first name does not contain numbers', () => {
        let generatedBirthDate = generateBirthDate();
        expect(generatedBirthDate.toString())
            .toMatch(/[a-zA-Z]+(\s+([a-zA-Z]+\s+)+)(0?[1-9]|[12][0-9]|3[01]) [0-9]+ [0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{1,3})? GMT\+[0-9]+\s\([^)]*\)/);
    });
})