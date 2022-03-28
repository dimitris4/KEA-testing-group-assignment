"use strict";
exports.__esModule = true;
exports.padZeros = exports.generateRandomNumber = exports.generateRandomOddNumber = exports.generateRandomEvenNumber = void 0;
var generateRandomEvenNumber = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    var result = 0;
    while (true) {
        result = (0, exports.generateRandomNumber)(min, max);
        if (result % 2 === 0) {
            return result;
        }
    }
    ;
};
exports.generateRandomEvenNumber = generateRandomEvenNumber;
var generateRandomOddNumber = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    var result = 0;
    while (true) {
        result = (0, exports.generateRandomNumber)(min, max);
        if (result % 2 !== 0) {
            return result;
        }
    }
    ;
};
exports.generateRandomOddNumber = generateRandomOddNumber;
var generateRandomNumber = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    var difference = max - min;
    var rand = Math.random();
    rand = Math.floor(rand * difference);
    return rand + min;
};
exports.generateRandomNumber = generateRandomNumber;
var padZeros = function (num, size) {
    var s = "000000000" + num;
    return s.substr(s.length - size);
};
exports.padZeros = padZeros;
