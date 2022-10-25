const btnSave = document.getElementById('button-save');
const btnRetrieve = document.getElementById('button-retrieve');
const btnDelete = document.getElementById('button-delete');

/** LocalStorage */
const saveInLocalStorage = () => {
  localStorage.setItem('userId', 45);
  localStorage.setItem('user', JSON.stringify({ name: 'Juan Carlos' }));
};

const retrieveFromLocalStorage = () => {
  const userId = localStorage.getItem('userId');
  const user = localStorage.getItem('user');
};

const deleteFromLocalStorage = () => {
  localStorage.removeIem('userid');
};

btnSave.addEventListener('click', saveInLocalStorage);
btnRetrieve.addEventListener('click', retrieveFromLocalStorage);
btnDelete.addEventListener('click', deleteFromLocalStorage);
