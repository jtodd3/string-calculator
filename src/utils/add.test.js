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

test('"add" should only return the sum of numbers that are less than or equal 1000', () => {
  expect(add('999,1000,1001')).toBe(1999);
});

test('"add" should only return the sum of numbers that are less than or equal 1000 (with empty values & newlines)', () => {
  expect(add('999,,1000,\n,1001,9')).toBe(2008);
});

test('"add" should return the number of numbers with a multi-character delimiter', () => {
  expect(add('111**44**2**5', '**')).toBe(162);
});

test('"add" should return the number of numbers with a multi-character delimiter (with empty values and newlines)', () => {
  expect(add('111****44**\n**5', '**')).toBe(160);
});

test('"add" should return the number of numbers with a multiple delimiters', () => {
  expect(add('11**4$4$2**5', ['**','$'])).toBe(26);
});

test('"add" should return the number of numbers with a multiple delimiters (with empty values and newlines)', () => {
  expect(add('11%4$!4$22!\n5%\n', ['%','$', '!'])).toBe(46);
});

test('"add" should return the number of numbers with a multiple multi-character delimiters', () => {
  expect(add('11**4$$12%%4$$2**5', ['**','$$', '%%'])).toBe(38);
});

test('"add" should return the number of numbers with a multiple multi-character delimiters (with empty values and newlines)', () => {
  expect(add('1++//\n//4==++5', ['//','++', '=='])).toBe(10);
});

