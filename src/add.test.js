const add = require('./add.js').default;

test('"add" should return a zero when given an empty string', () => {
  expect(add('')).toBe(0);
});

test('"add" should return a sum given a string of one number', () => {
  expect(add('3')).toBe(3);
});

test('"add" should return a sum given a string of two comma deliminated numbers', () => {
  expect(add('4,2')).toBe(6);
});

test('"add" should return a sum given a string of comma deliminated numbers with empty values', () => {
  expect(add('2,,4,6,,,3')).toBe(15);
});