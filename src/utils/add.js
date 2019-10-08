"use strict";
exports.__esModule = true;
exports.add = function (numbers, delimiter) {
    if (delimiter === void 0) { delimiter = ','; }
    var convertedNumbers = numbers.split(delimiter)
        .map(function (number) { return Number(number); })
        .filter(function (val) { return !isNaN(val); });
    return convertedNumbers.reduce(function (sum, number) { return sum += number; }, 0);
};
