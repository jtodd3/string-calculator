const { calculateSumFromInput } = require('./index.js');

test('"calculateSumFromInput" should return zero if the input is empty', () => {
  const input = '';
  expect(calculateSumFromInput(input)).toBe(0);
});

test('"calculateSumFromInput" should return the sum of a comma deliminated string of number', () => {
  const input = '3,5,9,1';
  expect(calculateSumFromInput(input)).toBe(18);
});

test('"calculateSumFromInput" should return the sum of values deliminated by a ";"', () => {
  const input = '//;\\n1;3;4';
  expect(calculateSumFromInput(input)).toBe(8);
});

test('"calculateSumFromInput" should return the sum of values deliminated by a ";"', () => {
  const input = '//;\\n1;3;4';
  expect(calculateSumFromInput(input)).toBe(8);
});

test('"calculateSumFromInput" should return the sum of values deliminated by a "?"', () => {
  const input = '//?\\n8?3?11';
  expect(calculateSumFromInput(input)).toBe(22);
});

test('"calculateSumFromInput" should return the sum of values deliminated by a "$"', () => {
  const input = '//$\\n3$2$11';
  expect(calculateSumFromInput(input)).toBe(16);
});

test('"calculateSumFromInput" should return the sum of values deliminated by a ";" (includes empty values)', () => {
  const input = '//;\\n1;3;;4;2';
  expect(calculateSumFromInput(input)).toBe(10);
});

test('"calculateSumFromInput" should return the sum of  values deliminated by a ";" (with newlines and empty values in string of values)', () => {
  const input = '//;\\n1;\\n;;4;2;\\n';
  expect(calculateSumFromInput(input)).toBe(7);
});

test('"calculateSumFromInput" should return zero is there is no values after the delimiter control code', () => {
  const input = '//;\\n';
  expect(calculateSumFromInput(input)).toBe(0);
});