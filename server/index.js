const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { handleETL } = require('../utils/handleETL.js');
const { getProducts, getStyles, getProductList } = require('./routes.js');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/products')
  .then(() => console.log('connected to products DB'))
  .catch(() => console.error('Failed to connect to DB'))

// RUN ETL (nned to change later to a script in package.json)
app.get('/etl', handleETL);

// ROUTES
app.get('/products', getProductList);
app.get('/products/:product_id', getProducts);
app.get('/products/:product_id/styles', getStyles);

app.listen(PORT, () => {
  console.log(`currently listening on port ${PORT}`);
});

