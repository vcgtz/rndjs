const rndjs = require('../src/index');
const words = require('../src/constants/adjectives');

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

  test('get a random value simulating rolling a dice', () => {
    const diceResults = [];

    for (let i = 0; i < 1000; i++) {
      diceResults.push(rndjs.rollADice());
    }

    const areValidValues = diceResults.every(n => n >= 1 && n <= 6);

    expect(areValidValues).toBe(true);
  });
});


describe('Testing random boolean values', () => {
  test('get a random boolean', () => {
    const randomBooleans = [];

    for (let i = 0; i < 1000; i++) {
      randomBooleans.push(rndjs.getRandomBoolean());
    }

    const areBooleans = randomBooleans.every(n => typeof n === 'boolean');

    expect(areBooleans).toBe(true);
  });

  test('get a random value simulating flipping a coin', () => {
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
  test('get a random lower case character', () => {
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);

    const randomChar = rndjs.getRandomChar().charCodeAt(0);
    const isValid = randomChar >= a && randomChar <= z;

    expect(isValid).toBe(true);
  });

  test('get a random upper case character', () => {
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);

    const randomChar = rndjs.getRandomChar({ upper: true }).charCodeAt(0);
    const isValid = randomChar >= A && randomChar <= Z;

    expect(isValid).toBe(true);
  });

  test('get a random word', () => {
    const randomWords = [];

    for (let i = 0; i < 1000; i++) {
      randomWords.push(rndjs.getRandomAdjective());
    }

    const areValidWords = randomWords.every(w => words.includes(w));

    expect(areValidWords).toBe(true);
  });
});

describe('Testing random colors', () => {
  test('check a random rgb object with the correct properties', () => {
    const rgb = rndjs.getRandomRGBColor();

    expect(Object.keys(rgb).length).toBe(3);
    expect(rgb.hasOwnProperty('r'));
    expect(rgb.hasOwnProperty('g'));
    expect(rgb.hasOwnProperty('b'));
  });

  test('get a random and valid rgb object', () => {
    const rgbColors = [];

    for (let i = 0; i < 1000; i++) {
      rgbColors.push(rndjs.getRandomRGBColor());
    }

    const areValidColors = rgbColors.every(c => (
        (c.r >= 0 && c.r <= 255) &&
        (c.g >= 0 && c.g <= 255) &&
        (c.b >= 0 && c.b <= 255)
    ));

    expect(areValidColors).toBe(true);
  });
});
