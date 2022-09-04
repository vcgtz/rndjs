const { getLowerCharsArray, getUpperCharsArray } = require('./helpers');

// Numeric functions
const getRandomNumber = () => Math.random();

const getRandomNumberBetween = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Boolean function
const getRandomBoolean = () => !!getRandomNumberBetween(0, 1);

const flipACoin = () => {
  const coin = getRandomBoolean();

  if (coin) {
    return 'tails';
  }

  return 'heads';
};

// String functions
const getRandomLowerChar = () => {
  const chars = getLowerCharsArray();
  const randomIndex = getRandomNumberBetween(0, chars.length - 1);

  return chars[randomIndex];
};

const getRandomUpperChar = () => {
  const chars = getUpperCharsArray();
  const randomIndex = getRandomNumberBetween(0, chars.length - 1);

  return chars[randomIndex];
};

const getRandomChar = (options) => {
  if (options && options.upper) {
    return getRandomUpperChar();
  }

  return getRandomLowerChar();
};

module.exports = {
  flipACoin,
  getRandomNumber,
  getRandomNumberBetween,
  getRandomBoolean,
  getRandomChar,
};
