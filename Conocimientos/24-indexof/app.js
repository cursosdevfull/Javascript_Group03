const notasFinales = [10, 15, 20, 16, 12, 18, 9, 13];

const posicion12 = notasFinales.indexOf(12);

console.log(posicion12);

const posicion10 = notasFinales.indexOf(10);

console.log(posicion10);

const posicion11 = notasFinales.indexOf(11);

console.log(posicion11);

const userRoles = ['MEDIC', 'BILLING', 'OWNER', 'MEDIC'];

const userRole = 'OPERATOR';

const position = userRoles.indexOf(userRole);

console.log(position);

/* if (position >= 0) {
  alert('User authorized');
} else {
  alert('User unauthorized');
} */

/* if (position < 0) {
  alert('User unauthorized');
}
 */

const newPosition = userRoles.indexOf('MEDIC', 1);

console.log(newPosition);
