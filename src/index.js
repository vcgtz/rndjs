const { getLowerCharsArray, getUpperCharsArray } = require('./helpers');

const getRandomNumber = () => Math.random();

const getRandomNumberBetween = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomBoolean = () => !!getRandomNumberBetween(0, 1);

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
  getRandomNumber,
  getRandomNumberBetween,
  getRandomBoolean,
  getRandomChar,
};
