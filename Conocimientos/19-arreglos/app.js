const numbers = [1, 2, 3];
console.log(numbers);

const otherNumbers = Array(3, 5);
console.log(otherNumbers);

const oneMoreWayNumbers = Array.of(5, 8, 13);
console.log(oneMoreWayNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

/* const keys = Array(10).keys();
console.log(keys);

const newArray = Array.from(keys);
console.log(newArray); */

const newArray = Array.from(Array(1000).keys());
console.log(newArray);

const otherArray = Array.from({ length: 200 }, (_, i) => i + 10);
console.log(otherArray);
