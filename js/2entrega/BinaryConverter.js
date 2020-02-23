'use strict';
function BinaryConverter(str) {
  const strArray = str.split('');
  let numeroDecimal = strArray.reduce(
    (accumulator, current, index) => accumulator + current * Math.pow(2, strArray.length - index - 1),
    0
  );
  return numeroDecimal;
}

/*
const test = '101';
const test2 = '1000';

function binaryConverter(str) {
  return str
    .split('')
    .reverse()
    .map((value, index) => (+value ? 2 ** index : 0))
    .reduce((accumulator, current) => accumulator + current);
}

console.log(`La conversión a decimal del binario ${test} es ${binaryConverter(test)}.`);
console.log(`La conversión a decimal del binario ${test2} es ${binaryConverter(test2)}.`);
*/
