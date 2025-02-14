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

productSchema.index({id: 1});

const Product = mongoose.model('Product', productSchema);

Product.createIndexes()
  .then(() => console.log('Product Indexes Created'))
  .catch((err) => console.error(err));



module.exports = Product;