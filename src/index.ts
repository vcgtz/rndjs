import { getLowerCharsArray, getUpperCharsArray } from './helpers';
import adjectives from './constants/adjectives';
import { RandomCharOptions, RGB } from './types';

// Numeric functions
export const getRandomNumber = (): number => Math.random();

export const getRandomNumberBetween = (start: number, end: number): number => {
  const min: number = Math.ceil(start);
  const max: number = Math.floor(end);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const rollADice = (): number => getRandomNumberBetween(1, 6);

// Boolean function
export const getRandomBoolean = (): boolean => !!getRandomNumberBetween(0, 1);

export const flipACoin = (): string => {
  const coin: boolean = getRandomBoolean();

  if (coin) {
    return 'tails';
  }

  return 'heads';
};

// String functions
const getRandomLowerChar = (): string => {
  const chars: string[] = getLowerCharsArray();
  const randomIndex: number = getRandomNumberBetween(0, chars.length - 1);

  return chars[randomIndex];
};

const getRandomUpperChar = (): string => {
  const chars: string[] = getUpperCharsArray();
  const randomIndex: number = getRandomNumberBetween(0, chars.length - 1);

  return chars[randomIndex];
};

export const getRandomChar = (options?: RandomCharOptions): string => {
  if (options && options.upper) {
    return getRandomUpperChar();
  }

  return getRandomLowerChar();
};

export const getRandomAdjective = (): string =>
  adjectives[getRandomNumberBetween(0, adjectives.length - 1)];

// Colors functions
export const getRandomRGBColor = (): RGB => {
  const r: number = getRandomNumberBetween(0, 255);
  const g: number = getRandomNumberBetween(0, 255);
  const b: number = getRandomNumberBetween(0, 255);

  return { r, g, b };
};
