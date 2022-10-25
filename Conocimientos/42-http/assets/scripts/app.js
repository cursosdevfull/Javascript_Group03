const postTemplate = document.getElementById('single-post');
const listElement = document.querySelector('.posts');
const btnFetchData = document.getElementById('available-posts');
const form = document.querySelector('#new-post form');

const sentHTTPRequestFetch = (method, url, data) =>
  fetch(url, { method, body: data }).then((res) => res.json());

const sentHTTPRequestXML = (method, url, data) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = 'json';

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
        /* const listOfPost = xhr.response;
      for (const post of listOfPost) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        postEl.querySelector('li').id = post.id;
        listElement.appendChild(postEl);
      } */
      } else {
        const error = new Error('Algo salió mal');
        reject(error);
        //throw new Error('Algo salió mal');
      }
    };

    xhr.onerror = () => {
      reject(new Error());
    };

    xhr.send(JSON.stringify(data));
  });

const fetchPostsHandler = async () => {
  try {
    //const response = await sentHTTPRequestXML("get", 'https://jsonplaceholder.typicode.com/posts');
    const response = await sentHTTPRequestFetch(
      'get',
      'https://jsonplaceholder.typicode.com/posts'
    );
    const listOfPost = response;
    for (const post of listOfPost) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      postEl.querySelector('button').addEventListener('click', () => {});
      listElement.appendChild(postEl);
    }
  } catch (error) {
    console.log(error);
  }

  /* sentHTTPRequestXML().then((response) => {
    const listOfPost = response;
    for (const post of listOfPost) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.appendChild(postEl);
    }
  }).catch(err => console.log(err)) */
};

const createPost = (title, body) => {
  const userId = Math.random();
  const fd = new FormData();
  fd.append('title', title);
  fd.append('body', body);
  fd.append('userId', userId);

  sentHTTPRequestXML('post', 'https://jsonplaceholder.typicode.com/posts', fd);
};

const summitHandler = (evt) => {
  evt.preventDefault();
  const title = evt.currentTarget.querySelector('#title').value;
  const content = evt.currentTarget.querySelector('#content').value;

  createPost(title, content);

  //console.log(title, content);
};

btnFetchData.addEventListener('click', fetchPostsHandler);
form.addEventListener('submit', summitHandler);

/*
    1xx: informativos
    2xx: confirmación, que todo está ok
    3xx: redirecciones
    4xx: errores de cliente
    5xx: errores de servidor
*/

/*
post
get
put
delete
patch
...
*/
