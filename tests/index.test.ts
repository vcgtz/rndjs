import { describe, test, expect } from '@jest/globals'
import * as rndjs from '../src/index';
import adjectives from '../src/constants/adjectives';
import { RGB } from '../src/types';

describe('Testing random numbers', () => {
  test('get a random number between 0 and 1', () => {
    const min = 0;
    const max = 1;
    const randomNumbers: number[] = [];

    for (let i = 0; i < 1000; i++) {
      randomNumbers.push(rndjs.getRandomNumber());
    }

    const areBetweenZeroAndOne: boolean = randomNumbers.every(n => n > min && n < max);

    expect(areBetweenZeroAndOne).toBe(true);
  });

  test('get a random number between 1 and 1000', () => {
    const min = 1;
    const max = 1000;
    const randomNumbers: number[] = [];

    for (let i = 0; i < 1000; i++) {
      randomNumbers.push(rndjs.getRandomNumberBetween(min, max));
    }

    const areBetweenOneAndThousand: boolean = randomNumbers.every(n => n >= min && n <= max);

    expect(areBetweenOneAndThousand).toBe(true);
  });

  test('get a random value simulating rolling a dice', () => {
    const diceResults: number[] = [];

    for (let i = 0; i < 1000; i++) {
      diceResults.push(rndjs.rollADice());
    }

    const areValidValues: boolean = diceResults.every(n => n >= 1 && n <= 6);

    expect(areValidValues).toBe(true);
  });
});


describe('Testing random boolean values', () => {
  test('get a random boolean', () => {
    const randomBooleans: boolean[] = [];

    for (let i = 0; i < 1000; i++) {
      randomBooleans.push(rndjs.getRandomBoolean());
    }

    const areBooleans: boolean = randomBooleans.every(n => typeof n === 'boolean');

    expect(areBooleans).toBe(true);
  });

  test('get a random value simulating flipping a coin', () => {
    const coins: string[] = [];
    const possibleValues: string[] = ['heads', 'tails'];

    for (let i = 0; i < 1000; i++) {
      coins.push(rndjs.flipACoin());
    }

    const areValidValues: boolean = coins.every(n => possibleValues.includes(n));

    expect(areValidValues).toBe(true);
  });
});


describe('Testing random characters or string', () => {
  test('get a random lower case character', () => {
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);

    const randomChar: number = rndjs.getRandomChar().charCodeAt(0);
    const isValid: boolean = randomChar >= a && randomChar <= z;

    expect(isValid).toBe(true);
  });

  test('get a random upper case character', () => {
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);

    const randomChar: number = rndjs.getRandomChar({ upper: true }).charCodeAt(0);
    const isValid: boolean = randomChar >= A && randomChar <= Z;

    expect(isValid).toBe(true);
  });

  test('get a random word', () => {
    const randomWords: string[] = [];

    for (let i = 0; i < 1000; i++) {
      randomWords.push(rndjs.getRandomAdjective());
    }

    const areValidWords: boolean = randomWords.every(w => adjectives.includes(w));

    expect(areValidWords).toBe(true);
  });
});

describe('Testing random colors', () => {
  test('check a random rgb object with the correct properties', () => {
    const rgb: RGB = rndjs.getRandomRGBColor();

    expect(Object.keys(rgb).length).toBe(3);
    expect(rgb.hasOwnProperty('r'));
    expect(rgb.hasOwnProperty('g'));
    expect(rgb.hasOwnProperty('b'));
  });

  test('get a random and valid rgb object', () => {
    const rgbColors: RGB[] = [];

    for (let i = 0; i < 1000; i++) {
      rgbColors.push(rndjs.getRandomRGBColor());
    }

    const areValidColors: boolean = rgbColors.every(c => (
        (c.r >= 0 && c.r <= 255) &&
        (c.g >= 0 && c.g <= 255) &&
        (c.b >= 0 && c.b <= 255)
    ));

    expect(areValidColors).toBe(true);
  });
});
