const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const productModel = require('./model');
const cors = require('cors');

const app = express();

const uri =
  'mongodb+srv://user-minitienda:elgigantedeacero@cluster0.2a0hw.mongodb.net/mini-tienda?retryWrites=true&w=majority';

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () =>
  console.log('Connection to MongoDB successfully')
);
connection.once('error', (error) => console.log(error));

app.use(cors());

app.get('/product', async (request, response) => {
  const productList = await productModel.find();
  response.json(productList);
  //const users = [{ name: 'Alfredo' }, { name: 'Jorge' }, { name: 'Lisa' }];

  //response.type("application/json").status(200).send(JSON.stringify(users))
  //response.json(users);
});

app.get('/healthcheck', (request, response) => response.send('Todo está ok'));

app.use((request, response) => response.status(404).send('Path not found'));

const server = http.createServer(app);

server.listen(5000, () => console.log('Server is running on port 5000'));
