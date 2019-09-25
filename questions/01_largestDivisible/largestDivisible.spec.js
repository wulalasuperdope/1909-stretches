const { largestDivisible } = require('./largestDivisble');

describe('largestDivisible', () => {
  test('should return null if there is no number that is divisible', () => {
    expect(largestDivisible([1], 2)).toBe(null);
  });

  test('should return the correct answer', () => {
    expect(largestDivisible([1, 2, 3, 4, 5, 6, 7], 3)).toBe(6);
  });

  test('should work on an unsorted array', () => {
    expect(largestDivisible([6, 1, 3, 2, 7, 5, 0], 3)).toBe(6);
  });

  test('should return null for 0', () => {
    expect(largestDivisible([6, 1, 3, 2, 7, 5, 0], 0)).toBe(null);
  });

  test('should return null for an empty array', () => {
    expect(largestDivisible([], 7)).toBe(null);
  });
});
