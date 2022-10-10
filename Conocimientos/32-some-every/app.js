const guessesParty = [
  { name: 'Javier', age: 20 },
  { name: 'Pedro', age: 45 },
  { name: 'Antonio', age: 13 },
  { name: 'Marcela', age: 87 },
  { name: 'Andrea', age: 12 },
];

const isThereAdult = guessesParty.some((guess) => guess.age >= 18);
const isThereChild = guessesParty.some((guess) => guess.age < 14);

console.log(isThereAdult);
console.log(isThereChild);

const areGuessesAdult = guessesParty.every((guess) => guess.age >= 18);

console.log(areGuessesAdult);
