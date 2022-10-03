//const listItemsSelected = document.querySelectorAll('li');
const listItemsSelected = document.getElementsByTagName('li');
//console.log(listItemsSelected);
for (const listItem of listItemsSelected) {
  console.dir(listItem);
}

const h1 = document.querySelector('h1');
h1.textContent = 'Nuevo contenido';
h1.style.color = 'skyblue';
h1.style.backgroundColor = 'purple';

const li = document.querySelector('li:last-of-type');
li.textContent = 'Contenido cambiado';
