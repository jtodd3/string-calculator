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
  const input = '//;\\n1;\n;;4;2;\n';
  expect(calculateSumFromInput(input)).toBe(7);
});

test('"calculateSumFromInput" should return zero is there is no values after the delimiter control code', () => {
  const input = '//;\\n';
  expect(calculateSumFromInput(input)).toBe(0);
});

test('"calculateSumFromInput" should return the sum of numbers with a multi-line delimiter', () => {
  const input = '//***\\n4***3***2***1';
  expect(calculateSumFromInput(input)).toBe(10);
});

test('"calculateSumFromInput" should return the sum of numbers with a multi-line delimiter (with empty values and newlines)', () => {
  const input = '//***\\n4******4***\n***1';
  expect(calculateSumFromInput(input)).toBe(9);
});

test('"calculateSumFromInput" should return the sum of numbers with a multiple delimiters', () => {
  const input = '//$,&\\n4$3&1$2&11';
  expect(calculateSumFromInput(input)).toBe(21);
});

test('"calculateSumFromInput" should return the sum of numbers with multiple multi-character delimiters', () => {
  const input = `//^^,##,--\\n6##3--8^^5^^2##1--9`;
  expect(calculateSumFromInput(input)).toBe(34);
});

