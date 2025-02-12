const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { handleETL } = require('../utils/handleETL.js');



const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/products')
  .then(() => console.log('connected to products DB'))
  .catch(() => console.error('Failed to connect to DB'))

app.get('/etl', handleETL);

app.listen(PORT, () => {
  console.log(`currently listening on port ${PORT}`);
});

