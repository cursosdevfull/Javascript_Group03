/* const sum = (a, b, c, d, e, f) => a + b + c + d + e + f;
console.log(sum(10, 20, 40, 20, 10, 40)); */

/* const sum = (numbers) => {
  let accum = 0;
  for (const number of numbers) {
    accum += number;
  }

  return accum;
};
 */

/* const sum = (...numbers) => {
  let accum = 0;
  for (const number of numbers) {
    accum += number;
  }

  return accum;
}; */

const sum = (a, b, ...numbers) => {
  let accum = a + b;
  for (const number of numbers) {
    accum += number;
  }

  return accum;
};

//console.log(sum([10, 20, 40, 20, 10, 40]));
console.log(sum(10, 20, 30, 20, 10, 40));

const authorization = (...rolesAllowed) => {
  const rolesUser = ['OPERATOR', 'ADMIN'];

  let userAuthenticate = false;

  for (const role of rolesAllowed) {
    if (rolesUser.indexOf(role) > -1) {
      userAuthenticate = true;
    }
  }

  return userAuthenticate;
};
