"use strict";
exports.__esModule = true;
var add_1 = require("./add");
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function () {
    var response;
    // Use a loop to make sure we read all available data.
    while ((response = process.stdin.read()) !== null) {
        var sum = add_1["default"](response);
        console.log(sum, 'sum');
    }
});
