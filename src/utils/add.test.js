const { add  } = require('./add.js');

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

test('"add" should return a sum given a string of comma deliminated number with new line characters', () => {
  expect(add('5,3,\n,3,\n,\n,4,\\n')).toBe(15);
});

test('"add" should return a sum given a string of comma deliminated number with new line characters and empty values', () => {
  expect(add('11,3,,\n,7,\n,3')).toBe(24);
});

test('"add" should throw an eror is any of the numbers are negative', () => {
  try {
    add('11,3,-9,3,-2');
    expect(true).toBe(false)
  } catch (e) {
    expect(e.message).toBe('Negatives not allowed. Negative numbers found: -9,-2');
  }
});

test('"add" should throw an eror is any of the numbers are negative (with empty values and newlines)', () => {
  try {
    add('11,\n,-9,,');
    expect(true).toBe(false)
  } catch (e) {
    expect(e.message).toBe('Negatives not allowed. Negative numbers found: -9');
  }
});