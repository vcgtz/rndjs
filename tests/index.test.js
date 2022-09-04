const rndjs = require('../src/index');

describe('Testing random numbers', () => {
  test('get a random number between 0 and 1', () => {
    const min = 0;
    const max = 1;
    const randomNumbers = [];

    for (let i = 0; i < 1000; i++) {
      randomNumbers.push(rndjs.getRandomNumber());
    }

    const areBetweenZeroAndOne = randomNumbers.every(n => n > min && n < max);

    expect(areBetweenZeroAndOne).toBe(true);
  });

  test('get a random number between 1 and 1000', () => {
    const min = 1;
    const max = 1000;
    const randomNumbers = [];

    for (let i = 0; i < 1000; i++) {
      randomNumbers.push(rndjs.getRandomNumberBetween(min, max));
    }

    const areBetweenOneAndThousand = randomNumbers.every(n => n >= min && n <= max);

    expect(areBetweenOneAndThousand).toBe(true);
  });
});


describe('Testing random boolean values', () => {
  test('get random boolean', () => {
    const randomBooleans = [];

    for (let i = 0; i < 1000; i++) {
      randomBooleans.push(rndjs.getRandomBoolean());
    }

    const areBooleans = randomBooleans.every(n => typeof n === 'boolean');

    expect(areBooleans).toBe(true);
  });

  test('flip a coin', () => {
    const coins = [];
    const possibleValues = ['heads', 'tails'];

    for (let i = 0; i < 1000; i++) {
      coins.push(rndjs.flipACoin());
    }

    const areValidValues = coins.every(n => possibleValues.includes(n));

    expect(areValidValues).toBe(true);
  });
});


describe('Testing random characters or string', () => {
  test('get random lower case character', () => {
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);

    const randomChar = rndjs.getRandomChar().charCodeAt(0);
    const isValid = randomChar >= a && randomChar <= z;

    expect(isValid).toBe(true);
  });

  test('get random upper case character', () => {
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);

    const randomChar = rndjs.getRandomChar({ upper: true }).charCodeAt(0);
    const isValid = randomChar >= A && randomChar <= Z;

    expect(isValid).toBe(true);
  });
});
