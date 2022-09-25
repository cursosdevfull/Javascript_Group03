const username = 'Andrea';

function printInfoUser() {
  const age = 13;
  console.log('nombre', username);
  console.log('age', age);
}

printInfoUser();
//console.log('age out function', age);

if (username === 'Andrea') {
  const lastname = 'Hidalgo';
  console.log(`Fullname is ${username} ${lastname}`);
}

console.log('lastname', lastname);
