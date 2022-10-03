const ul = document.querySelector('ul');
//ul.innerHTML = ul.innerHTML + '<li>Item 6</li>';
ul.innerHTML += "<li>Item '6</li>";

const div = document.querySelector('div');
//div.insertAdjacentHTML('afterend', 'texto');
div.insertAdjacentHTML('afterbegin', '<h1>Titulo</h1>');
