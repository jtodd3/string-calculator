"use strict";
exports.__esModule = true;
var add_1 = require("./utils/add");
var NEWLINE_CHARACTER = '\\n';
var getDelimiter = function (inputString, controlCharacter, endOfDelimiter) {
    if (controlCharacter === void 0) { controlCharacter = '//'; }
    if (endOfDelimiter === void 0) { endOfDelimiter = NEWLINE_CHARACTER; }
    var controlCodeIndex = inputString.indexOf(controlCharacter) + controlCharacter.length;
    var endOfDelimiterIndex = inputString.indexOf(endOfDelimiter);
    return inputString.slice(controlCodeIndex, endOfDelimiterIndex);
};
var getStringOfNumbers = function (inputString, endOfDelimiter) {
    if (endOfDelimiter === void 0) { endOfDelimiter = NEWLINE_CHARACTER; }
    var endOfDelimiterIndex = inputString.indexOf(endOfDelimiter) + endOfDelimiter.length;
    return inputString.slice(endOfDelimiterIndex);
};
exports.calculateSumFromInput = function (inputString) {
    var sum;
    if (inputString.includes('//')) {
        var delimiter = getDelimiter(inputString);
        var numbers = getStringOfNumbers(inputString);
        sum = add_1.add(numbers, delimiter);
    }
    else {
        sum = add_1.add(inputString);
    }
    return sum;
};
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function () {
    var response;
    // Use a loop to make sure we read all available data.
    while ((response = process.stdin.read()) !== null) {
        var sum = exports.calculateSumFromInput(response);
        console.log(sum, 'sum');
    }
});
