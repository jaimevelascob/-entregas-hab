'use strict';
function letterCount(str) {
  let longWord = str.split(` `).sort((a, b) => {
    return b.length - a.length;
  });
  return longWord[0];
}
console.log(letterCount(prompt(`Introduce lo que quieras que te voy a sacar la palabra más larga vol.2`)));
