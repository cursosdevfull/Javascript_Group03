const notas = [10, 12, 15, 15, 18, 13, '20', 19];

const aprobados = notas.find((nota) => {
  return nota > 13;
});

console.log(aprobados);

const posicionMaxNota = notas.findIndex((nota) => {
  return nota === 20;
});

console.log(posicionMaxNota);

const users = [
  { username: 'User 01', age: 10 },
  { username: 'User 02', age: 30 },
  { username: 'User 03', age: 25 },
];

const posicionUser30 = users.findIndex((user) => {
  return user.age > 20;
});

console.log(posicionUser30);
