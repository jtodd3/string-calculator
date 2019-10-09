"use strict";
exports.__esModule = true;
var getRegExpFromDelimiter = function (delimiter) {
    return delimiter.split('').reduce(function (regex, char) {
        regex += "\\" + char;
        return regex;
    }, '');
};
var getDelimiterRegex = function (delimiters) {
    var delimitersJoined = delimiters.map(function (delimiter) { return getRegExpFromDelimiter(delimiter); }).join('|');
    return new RegExp(delimitersJoined, "g");
};
exports.add = function (numbers, delimiter) {
    if (delimiter === void 0) { delimiter = ','; }
    var delimiterArray = Array.isArray(delimiter) ? delimiter : [delimiter];
    var delimiterRegex = getDelimiterRegex(delimiterArray);
    var convertedNumbers = numbers.split(delimiterRegex)
        .map(function (number) { return Number(number); })
        .filter(function (number) { return number <= 1000; });
    if (convertedNumbers.some((function (number) { return number < 0; }))) {
        var negativeNumbers = convertedNumbers.filter(function (number) { return number < 0; });
        throw new Error("Negatives not allowed. Negative numbers found: " + negativeNumbers.join(','));
    }
    return convertedNumbers.reduce(function (sum, number) { return sum += number; }, 0);
};
