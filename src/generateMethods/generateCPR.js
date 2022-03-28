"use strict";
exports.__esModule = true;
exports.generateCPR = void 0;
var generateRandomNumberBetweenRange_1 = require("../utils/generateRandomNumberBetweenRange");
var generateCPR = function (person, dateOfBirth) {
    var personToGetCPR;
    // the following logic is stupid, 
    // but I did it because it is a requirement to
    // generate CPRs even without a person...
    if (person === null) {
        personToGetCPR = {
            firstName: '',
            lastName: '',
            gender: (Date.now() % 2) == 1 ? 'M' : 'F'
        };
    }
    else {
        personToGetCPR = person;
    }
    ;
    var CPRDate = dateOfBirth.toLocaleDateString("en-GB", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit"
    }).replaceAll('/', '');
    var randomNumber = personToGetCPR.gender === 'M' ? (0, generateRandomNumberBetweenRange_1.generateRandomOddNumber)(0, 9999) : (0, generateRandomNumberBetweenRange_1.generateRandomEvenNumber)(0, 9999);
    return "".concat(CPRDate, "-").concat((0, generateRandomNumberBetweenRange_1.padZeros)(randomNumber, 4));
};
exports.generateCPR = generateCPR;
