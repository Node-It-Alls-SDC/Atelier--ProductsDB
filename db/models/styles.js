const mongoose = require('mongoose');

// const photosSchema = new mongoose.Schema({
//   thumbnail_url: String,
//   url: String
// }, {_id: false});

// const skusSchema = new mongoose.Schema({
//   quantity: Number,
//   size: String
// }, {_id: false});

const stylesSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String,
  sale_price: {
    type: Number,
    required: false
  },
  original_price: Number,
  'default?': Number,
});

stylesSchema.index({product_id: 1});

const Styles = mongoose.model('Styles', stylesSchema);

Styles.createIndexes()
  .then(() => console.log('Styles Indexes Created'))
  .catch((err) => console.error(err));

module.exports = Styles;