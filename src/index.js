const getRandomNumber = () => Math.random();

const getRandomBetween = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomBoolean = () => !!getRandomBetween(0, 1);

module.exports = {
  getRandomNumber,
  getRandomBetween,
  getRandomBoolean
};
