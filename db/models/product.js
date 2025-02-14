const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  create_at: Date,
  updated_at: Date
});

const Product = mongoose.model('Product', productSchema);



module.exports = Product;