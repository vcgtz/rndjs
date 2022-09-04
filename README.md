# rndjs
Minimal library to generate random values.

## Installation
This module is available through [NPM](https://www.npmjs.com/).

To install this library, you just need to run:
```bash
npm i rndjs
```

Then, you can import it en your project:
```js
const rndjs = require('rndjs');
```

## Available functions
### `getRandomNumber`
It returns a number between 0 and 1.
```js
const rndjs = require('rndjs');

rndjs.getRandomNumber();
```

### `getRandomNumberBetween`
It returns a random number between two numbers, including them.
```js
const rndjs = require('rndjs');

rndjs.getRandomNumberBetween(10, 25); // It returns a number between 10 and 25
```

### `getRandomBoolean`
It returns a random boolean value.
```js
const rndjs = require('rndjs');

rndjs.getRandomBoolean(); // It returns true or false
```

### `getRandomChar`
It returns a random character between `a` and `z`. If you pass an object with the attribute `upper: true`, this method returns the uppercase character.
```js
const rndjs = require('rndjs');

rndjs.getRandomChar(); // It returns a char between a-z
rndjs.getRandomChar({ upper: true }); // It returns a char between A-Z
```

## License
[MIT](https://github.com/vcgtz/rndjs/blob/main/LICENSE)
