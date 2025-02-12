const mongoose = require('mongoose');

const relatedSchema = new mongoose.Schema({
  id: Number,
  current_product_id: Number,
  related_product_id: Number
});

const Related = mongoose.model('Related', relatedSchema);

module.exports = Related;