const mongoose = require('mongoose');

const stylesSchema = new mongoose.Schema({
  style_id: Number,
  product_id: Number,
  name: String,
  sale_price: {
    type: Number,
    required: false
  },
  original_price: Number,
  'default?': Boolean
});

stylesSchema.index({product_id: 1});

const Styles = mongoose.model('Styles', stylesSchema);

Styles.createIndexes()
  .catch((err) => console.error(err));

module.exports = Styles;