const guessesParty = [
  { name: 'Javier', age: 20 },
  { name: 'Pedro', age: 45 },
  { name: 'Antonio', age: 13 },
  { name: 'Marcela', age: 87 },
  { name: 'Andrea', age: 12 },
];

/* const listGuessesCanDrinkBeer = [];

guessesParty.forEach((guess) => {
  if (guess.age >= 18) {
    listGuessesCanDrinkBeer.push(guess);
  }
}); */

const listGuessesCanDrinkBeer = guessesParty.filter((guess) => {
  return guess.age >= 18;
});

/*
  1. Invitados que tomaran soda o gaseosa o refresco. Son aquellos cuya edad es menor a 18 o mayor a 80
  2. Invitados con preferencia en la vacunación. Son aquellos cuya edad es mayor a 80 años
*/

console.log(listGuessesCanDrinkBeer);

/* const listGuessesOnlyDrinkSoda = guessesParty.filter(guess => {
  return guess.age<18 || guess.age>80
}) */

const listGuessesOnlyDrinkSoda = guessesParty.filter(
  (guess) => guess.age < 18 || guess.age > 80
);

const listGuessesPreferredVaccum = guessesParty.filter(
  (guess) => guess.age > 80
);

console.log('listGuessOnlyDrinkSoda', listGuessesOnlyDrinkSoda);
console.log('listGuessPreferrendVaccum', listGuessesPreferredVaccum);
