const user = ['Cecilia', 'Arroyo', 23, 'femenino'];
/* const name = user[0]
const lastname = user[1]
const age = user[2]
const gender = user[3] */
const [name, lastname, age, gender] = user;
console.log(name, lastname, age, gender);

const dataCSV =
  'sergio;hidalgo;40;masculino\ncarla;buendia;45;femenino\nclaudia;ortiz;56;femenino';

const result = dataCSV
  .split('\n') // ["...", "...", "..."]
  .map((line) => line.split(';')) // [ [], [], []  ]
  .map((person) => {
    const [name, lastname, age, gender] = person;
    return {
      name,
      lastname,
      age,
      gender,
      fullname: `${name} ${lastname}`,
    };
  });

console.log('result', result);
