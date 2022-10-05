/**
 * Reference: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from#generador_de_secuencia_(rango)
 *
 */
export const range = (start: number, end:number, step:number = 1): number[] =>
  Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);

export const getLowerCharsArray = (): string[] =>
  range('a'.charCodeAt(0), 'z'.charCodeAt(0)).map((c) =>
    String.fromCharCode(c)
  );

export const getUpperCharsArray = (): string[] =>
  range('A'.charCodeAt(0), 'Z'.charCodeAt(0)).map((c) =>
    String.fromCharCode(c)
  );
