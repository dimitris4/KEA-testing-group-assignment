"use strict";
exports.__esModule = true;
exports.validateCPRDate = void 0;
var validateCPRDate = function (CPR, dateOfBirth) {
    var CPRDate = CPR.substring(0, 6);
    var lastYearDigits = ("" + dateOfBirth.getFullYear()).substring(2, 4);
    var day = ('0' + dateOfBirth.getDate()).slice(-2);
    var month = ('0' + (dateOfBirth.getMonth() + 1)).slice(-2);
    var formatedDate = day + month + lastYearDigits;
    if (CPRDate == formatedDate) {
        return true;
    }
    return false;
};
exports.validateCPRDate = validateCPRDate;
