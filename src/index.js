const { getLowerCharsArray, getUpperCharsArray } = require('./helpers');

const getRandomNumber = () => Math.random();

const getRandomBetween = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomBoolean = () => !!getRandomBetween(0, 1);

const getRandomLowerChar = () => {
  const chars = getLowerCharsArray();
  const randomIndex = getRandomBetween(0, chars.length - 1);

  return chars[randomIndex];
};

const getRandomUpperChar = () => {
  const chars = getUpperCharsArray();
  const randomIndex = getRandomBetween(0, chars.length - 1);

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
  getRandomBetween,
  getRandomBoolean,
  getRandomChar,
};
