const mongoose = require('mongoose');

const relatedSchema = new mongoose.Schema({
  id: Number,
  current_product_id: Number,
  related_product_id: Number
});

relatedSchema.index({current_product_id: 1});

const Related = mongoose.model('Related', relatedSchema);

Related.createIndexes()
  .catch((err) => console.error(err));

module.exports = Related;