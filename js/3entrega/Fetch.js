'use strict';

const url = `https://api.exchangerate-api.com/v4/latest/EUR`;

const fetchPromise = fetch(url);

async function getData(url) {
  return await (await fetch(url)).json();
}

getData(url).then((data) => {
  const dataEUR = data.rates.EUR;
  const dataUSD = data.rates.USD;
  const dataJPY = data.rates.JPY;

  const number = prompt('mete la cantidad');
  const operation = prompt('convertir en:');
  switch (operation) {
    case 'euro':
      console.log(`el resultado es ${number * dataEUR} Euros`);
      break;
    case 'dolar':
      console.log(`el resultado es ${number * dataUSD} Dolares`);
      break;
    case 'yen':
      console.log(`el resultado es ${number * dataJPY} Yens`);
      break;
    default:
      console.log('no se reconoce ese caracter');
  }
});
