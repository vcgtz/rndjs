# rndjs
Minimal library to generate random values. (Now with support for TypeScript!)

![npm](https://img.shields.io/npm/l/rndjs?color=blue)
![npm](https://img.shields.io/npm/v/rndjs)
![github actions](https://github.com/vcgtz/rndjs/actions/workflows/node.js.yml/badge.svg)

## Installation
This module is available through [NPM](https://www.npmjs.com/).

To install this library, you just need to run:
```bash
npm i rndjs
```

Then, you can import it en your project:
```js
const rndjs = require('rndjs');

// or
import * as rndjs from 'rndjs';
```

## Available functions
### `getRandomNumber(): number`
It returns a number between 0 and 1.
```js
rndjs.getRandomNumber();
```

### `getRandomNumberBetween(start: number, end: number): number`
It returns a random number between two numbers, including them.
```js
rndjs.getRandomNumberBetween(10, 25); // It returns a number between 10 and 25
```

### `getRandomBoolean(): boolean`
It returns a random boolean value.
```js
rndjs.getRandomBoolean(); // It returns true or false
```

### `getRandomChar(options?: RandomCharOptions): string`
It returns a random character between `a` and `z`. If you pass an object with the attribute `upper: true`, this method returns the uppercase character.
```js
rndjs.getRandomChar(); // It returns a char between a-z
rndjs.getRandomChar({ upper: true }); // It returns a char between A-Z
```

### `getRandomAdjective(): string`
It returns a random adjective.
```js
rndjs.getRandomAdjective(); // It returns beautiful for example
```

### `getRandomRGBColor(): RGB`
It returns a random RGB color object. The object has the format `{ r: <number>, g: <number>, b: <number> }`
```js
rndjs.getRandomRGBColor(); // It returns an object like {r: 19, g: 110, b: 166}
```

### `flipACoin(): string`
It simulates flip a coin.
```js
rndjs.flipACoin(); // It returns 'heads' or 'tails'
```

### `rollADice(): number`
It simulates a dice roll.
```js
rndjs.rollADice(); // It returns a number between 1 and 6
```

## License
[MIT](https://github.com/vcgtz/rndjs/blob/main/LICENSE)
