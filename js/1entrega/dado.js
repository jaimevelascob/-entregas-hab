'use strict';

function randomNumber() {
  return Math.ceil(Math.random() * 6);
}
let totalScore = 0;
let cont = 0;
for (let i = 1; totalScore < 50; i++) {
  const dice = randomNumber();
  totalScore += dice;
  if (totalScore <= 50) {
    console.log(totalScore);
    console.log(`Tirada ${cont}: ha salido un ${dice}. Tienes un total de ${totalScore} puntos.`);
    {
      cont++;
    }
  } else {
    console.log(`¡Enhorabuena, ha salido un ${dice}! ¡Has ganado con un total de ${totalScore} puntos! `);
  }
}
