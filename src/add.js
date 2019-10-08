"use strict";
exports.__esModule = true;
var add = function (numbers) {
    var convertedNumbers = numbers.split(',').map(function (number) { return Number(number); });
    return convertedNumbers.reduce(function (sum, number) { return sum += number; }, 0);
};
exports["default"] = add;
