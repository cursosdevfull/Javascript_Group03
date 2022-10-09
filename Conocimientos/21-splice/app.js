const hobbies = ['Cantar', 'Bailar'];
hobbies[1] = 'Cocinar';
hobbies[5] = 'Viajar';

console.log(hobbies, hobbies[4]);

hobbies.splice(1, 1);

console.log(hobbies);

hobbies[2] = 'Dibujar';
hobbies[3] = 'Ver películas';

console.log(hobbies);

hobbies.splice(2, 0, 'Pasear');

console.log(hobbies);

hobbies.splice(4, 0, 'Pintar', 'Comprar');

console.log(hobbies);
