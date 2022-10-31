const http = require('http');

const server = http.createServer((request, response) => {
  const users = [{ name: 'Alfredo' }, { name: 'Jorge' }, { name: 'Lisa' }];

  response.writeHead(200, { 'content-type': 'application/json' });
  response.write(JSON.stringify(users));
  response.end();
});

server.listen(5000, () => console.log('Server is running on port 5000'));
