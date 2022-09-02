/**
 * Reference: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from#generador_de_secuencia_(rango)
 *
 */
const range = (start, end, step = 1) =>
  Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);

const getLowerCharsArray = () =>
  range('a'.charCodeAt(0), 'z'.charCodeAt(0)).map((c) =>
    String.fromCharCode(c)
  );

const getUpperCharsArray = () =>
  range('A'.charCodeAt(0), 'Z'.charCodeAt(0)).map((c) =>
    String.fromCharCode(c)
  );

module.exports = {
  range,
  getLowerCharsArray,
  getUpperCharsArray,
};
