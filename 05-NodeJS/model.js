const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
  price: Number,
});

const model = mongoose.model('product', schema);

module.exports = model;
