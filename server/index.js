const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const { handleETL } = require('../utils/handleETL.js');
const { getProducts, getStyles, getProductList, getRelated } = require('./routes.js');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://18.116.88.215:27017/products')
  .then(() => console.log('connected to products DB'))
  .catch(() => console.error('Failed to connect to DB'))

// LOADER.IO VERIFICATION TEST
app.get('/loaderio-6362038af9670d9acd823ff4ae1bc4cf.txt', (req, res) => {
  res.send('loaderio-6362038af9670d9acd823ff4ae1bc4cf');
});

// ROUTES
app.get('/products', getProductList);
app.get('/products/:product_id', getProducts);
app.get('/products/:product_id/styles', getStyles);
app.get('/products/:product_id/related', getRelated);

app.listen(PORT, () => {
  console.log(`currently listening on port ${PORT}`);
});

module.exports = { app };

