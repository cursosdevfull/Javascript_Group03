const newLi = document.createElement('li');
const content = document.createTextNode('Hola a todos');
newLi.append(content);

const liFirst = document.querySelector('li:first-of-type');
const cloneLi = liFirst.cloneNode(true);
cloneLi.textContent = 'Item 11';

const ul = liFirst.parentElement;

ul.append(newLi, cloneLi);
