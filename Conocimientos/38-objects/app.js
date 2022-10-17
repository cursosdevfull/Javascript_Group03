const person = {
  name: 'Adriana',
  lastname: 'Zavala',
  'name and lastname': 'Adriana Zavala',
  age: 40,
  hobbies: ['correr', 'estudiar', 'bailar'],
  nameParents: { fatherName: 'Jorge Zavala', motherName: 'Andrea Colmenares' },
  greet: function greetMessage() {
    alert('Buen día');
  },
  afternoonGreet: function () {
    alert('Buenas tardes');
  },
  eveningGreet: () => alert('Buenas noches'),
  /* bye: () => alert('Adiós'), */
  bye() {
    alert('Adiós');
  },
  fullName() {
    return `${this.name} ${this.lastname}`;
  },
  21: "Person's age",
};

console.log('person', person);
console.log('name', person.name);
console.log('lastname', person.lastname);
console.log('fullname', person['name and lastname']);
console.log('person age', person['21']);

person.isAdmin = true;
person['rol person'] = 'administrator';

delete person.age;

Object.freeze(person);

person.name = 'Gloria';
//person.hobbies = ['saltar', 'viajar'];
person.hobbies.push('viajar');
person.hobbies.shift();

delete person.lastname;

console.log('person', person);
/* console.log(person.greet());
console.log(person.afternoonGreet());
console.log(person.eveningGreet());
console.log(person.bye());
console.log(person.fullName()); */

const drinks = [
  {
    drinkId: 1,
    strIngredient1: 'Ingredient1',
    strIngredient2: 'Ingredient2',
    strIngredient3: 'Ingredient3',
    strIngredient4: null,
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
  },
  {
    drinkId: 2,
    strIngredient1: 'Ingredient1',
    strIngredient2: 'Ingredient2',
    strIngredient3: null,
    strIngredient4: null,
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strInstructions: 'Merge all ingredients',
  },
  {
    drinkId: 3,
    strIngredient1: 'Ingredient1',
    strIngredient2: 'Ingredient2',
    strIngredient3: 'Ingredient3',
    strIngredient4: 'Ingredient4',
    strIngredient5: 'Ingredient5',
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
  },
];

//[{drinkId:..., ingredients: [...]}]
const newDrinksList = drinks.map((drink) => {
  const properties = Object.keys(drink); // ["drinkId", "strIngredient1", , "strIngredient2", "strIngredient3", ...]

  const ingredients = [];

  for (const property of properties) {
    if (
      property !== 'drinkId' &&
      drink[property] !== null &&
      property.indexOf('strIngredient') >= 0
    ) {
      ingredients.push(drink[property]);
    }
  }

  return { drinkId: drink.drinkId, ingredients };
});

console.log('newDrinksList', newDrinksList);
