for (let count = 0; count < 50; count++) {
  console.log(count);
}

const users = ['José', 'María', 'Jorge', 'Pamela'];

for (const name of users) {
  console.log(name);
}

const infoUser = {
  name: 'Sergio',
  lastname: 'Hidalgo',
  civilStatus: 'casado',
};

for (const prop in infoUser) {
  console.log(prop);
  console.log(infoUser[prop]);
}

for (const prop of Object.keys(infoUser)) {
  console.log(prop);
}
