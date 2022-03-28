"use strict";
exports.__esModule = true;
exports.generatePhoneNumber = void 0;
var generateRandomNumberBetweenRange_1 = require("../utils/generateRandomNumberBetweenRange");
var generatePhoneNumber = function (person) {
    var personToGetPhoneNumber;
    var randomPhoneNumber;
    var phoneNumberSize = 8;
    var startDigits = ["2", "30", "31", "40", "41", "42", "50", "51", "52", "53", "60", "61", "71", "81", "91", "92", "93",
        "342", "344", "345", "346", "347", "348", "349", "356", "357", "359", "362", "365", "366", "389",
        "398", "431", "441", "462", "466", "468", "472", "474", "476", "478", "485", "486", "488", "489",
        "493", "494", "495", "496", "498", "499", "542", "543", "545", "551", "552", "556", "571", "572",
        "573", "574", "577", "579", "584", "586", "587", "589", "597", "598", "627", "629", "641", "649",
        "658", "662", "663", "664", "665", "667", "692", "693", "694", "697", "771", "772", "782", "783",
        "785", "786", "788", "789", "826", "827", "829"];
    if (person === null) {
        personToGetPhoneNumber = {
            firstName: '',
            lastName: '',
            gender: (Date.now() % 2) == 1 ? 'M' : 'F'
        };
    }
    else {
        personToGetPhoneNumber = person;
    }
    ;
    var randomIndex = (0, generateRandomNumberBetweenRange_1.generateRandomNumber)(0, startDigits.length);
    var randomStartDigit = startDigits[randomIndex];
    randomPhoneNumber = randomStartDigit;
    for (var index = 0; index < phoneNumberSize - randomStartDigit.length; index++) {
        randomPhoneNumber += (0, generateRandomNumberBetweenRange_1.generateRandomNumber)(0, 10).toString();
    }
    return "".concat(randomPhoneNumber);
};
exports.generatePhoneNumber = generatePhoneNumber;
