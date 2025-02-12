const mongoose = require('mongoose');

const stylesSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String,
  sale_price: {
    type: Number,
    required: false
  },
  original_price: Number,
  default_style: Number
});

const Styles = mongoose.model('Styles', stylesSchema);

module.exports = Styles;