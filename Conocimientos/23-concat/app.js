const notasFinalesGrupo1 = [10, 15, 20, 16, 12, 18, 9, 13];

const notasFinalesGrupo2 = [19, 14];

const notasFinales = notasFinalesGrupo1.concat(notasFinalesGrupo2);

console.log(notasFinales);

const finales = notasFinales.concat(11, 12, 13);

console.log(finales);

const finalesString = finales.concat('15', '15', '19');

console.log(finalesString);

finalesString[0] = '20';

console.log(finalesString);
