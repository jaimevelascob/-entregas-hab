'use strict';

const maria = [62, 34, 55];
const paula = [35, 60, 59];
const rebeca = [40, 39, 63];
function average(arrayTeam) {
  let totalScore = 0;
  for (let i = 0; i < arrayTeam.length; i++) {
    totalScore += arrayTeam[i];
    return totalScore / arrayTeam.length;
  }
}
const averageMaria = average(maria);
const averagePaula = average(paula);
const averageRebeca = average(rebeca);

if (averageMaria > averagePaula && averageRebeca) {
  console.log(averageMaria);
}
