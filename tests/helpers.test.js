const helpers = require('../src/helpers');

describe('Testing helper functions', () => {
  test('get array from range 0 to 10', () => {
    const numbers = helpers.range(0, 10);

    expect(numbers).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('get array from range 234 to 237', () => {
    const numbers = helpers.range(234, 237);

    expect(numbers).toEqual([234, 235, 236, 237]);
  });

  test('get array with lower case chars', () => {
    const chars = helpers.getLowerCharsArray();

    expect(chars).toEqual([
      'a', 'b', 'c', 'd', 'e',
      'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't',
      'u', 'v', 'w', 'x', 'y',
      'z'
    ]);
  });

  test('get array with upper case chars', () => {
    const chars = helpers.getUpperCharsArray();

    expect(chars).toEqual([
      'A', 'B', 'C', 'D', 'E',
      'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y',
      'Z'
    ]);
  });
});
