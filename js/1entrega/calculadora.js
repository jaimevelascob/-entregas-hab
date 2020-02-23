'use strict';
const number1 = +prompt('Please enter your number');
const operation = prompt('what fuction do u want');
const number2 = +prompt('write the second number');

switch (operation) {
  case 'suma':
    console.log(`el resultado es ${number1 + number2}`);
    break;
  case 'resta':
    console.log(`el resultado es ${number1 - number2}`);
    break;
  case 'multiplicación':
    console.log(`el resultado es ${number1 * number2}`);
    break;
  case 'división':
    console.log(`el resultado es ${number1 / number2}`);
    break;
}
