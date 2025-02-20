const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const { handleETL } = require('../utils/handleETL.js');
const { getProducts, getStyles, getProductList, getRelated } = require('./routes.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

mongoose.connect('mongodb://3.135.221.100:27017/products')
  .then(() => console.log('connected to products DB'))
  .catch(() => console.error('Failed to connect to DB'))


// LOADER.IO VERIFICATION
app.get('/loaderio-be33675596a288215fca02c84d2d56d8.txt', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'loaderio-be33675596a288215fca02c84d2d56d8.txt'));
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

