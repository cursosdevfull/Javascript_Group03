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

  console.log('userId', userId);
  console.log('user', user);
  console.log('name', JSON.parse(user).name);
};

const deleteFromLocalStorage = () => {
  //localStorage.removeItem('userId');
  localStorage.clear();
};

/** SessionStorage */
const saveInSessionStorage = () => {
  sessionStorage.setItem('userId', 45);
  sessionStorage.setItem('user', JSON.stringify({ name: 'Juan Carlos' }));
};

const retrieveFromSessionStorage = () => {
  const userId = sessionStorage.getItem('userId');
  const user = sessionStorage.getItem('user');

  console.log('userId', userId);
  console.log('user', user);
  console.log('name', JSON.parse(user).name);
};

const deleteFromSessionStorage = () => {
  //localStorage.removeItem('userId');
  sessionStorage.clear();
};

/** Cookies */
const saveInCookies = () => {
  const expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() + 30000);
  document.cookie = 'userId=20; max-age=30';
  document.cookie =
    'user=' +
    JSON.stringify({ name: 'Claudia' }) +
    '; expires=' +
    expiresDate.toGMTString();
};

const getCookie = (cookieName) => {
  const pairCookies = document.cookie.split(';').map((el) => el.trim());

  const cookies = pairCookies.reduce((accum, pair) => {
    const pairValue = pair.split('=');
    if (!accum[pairValue[0]]) {
      accum[pairValue[0]] = pairValue[1];
    }
    return accum;
  }, {});

  return cookies[cookieName];
};

const retrieveFromCookies = () => {
  const userId = getCookie('userId');
  const user = getCookie('user');

  console.log('userId', userId);
  console.log('user', user);
};

const deleteCookie = (cookieName) => {
  const expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() - 1000);
  document.cookie = `${cookieName}=; expires=${expiresDate.toGMTString()}`;
};

const deleteFromCookies = () => {
  deleteCookie('userId');
  deleteCookie('user');
};

/* const retrieveFromSessionStorage = () => {
  const userId = sessionStorage.getItem('userId');
  const user = sessionStorage.getItem('user');

  console.log('userId', userId);
  console.log('user', user);
  console.log('name', JSON.parse(user).name);
};

const deleteFromSessionStorage = () => {
  //localStorage.removeItem('userId');
  sessionStorage.clear();
}; */

btnSave.addEventListener('click', saveInCookies);
btnRetrieve.addEventListener('click', retrieveFromCookies);
btnDelete.addEventListener('click', deleteFromCookies);
