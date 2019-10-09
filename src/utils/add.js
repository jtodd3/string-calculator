"use strict";
exports.__esModule = true;
exports.add = function (numbers, delimiter) {
    if (delimiter === void 0) { delimiter = ','; }
    var convertedNumbers = numbers.split(delimiter)
        .map(function (number) { return Number(number); })
        .filter(function (val) { return !isNaN(val); });
    if (convertedNumbers.some((function (number) { return number < 0; }))) {
        var negativeNumbers = convertedNumbers.filter(function (number) { return number < 0; });
        throw new Error("Negatives not allowed. Negative numbers found: " + negativeNumbers.join(','));
    }
    return convertedNumbers.reduce(function (sum, number) { return sum += number; }, 0);
};
