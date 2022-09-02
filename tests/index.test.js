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
      randomNumbers.push(rndjs.getRandomBetween(min, max));
    }

    const areBetweenOneAndThousand = randomNumbers.every(n => n >= min && n <= max);

    expect(areBetweenOneAndThousand).toBe(true);
  });
});
