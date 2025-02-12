const mongoose = require('mongoose');

const skusSchema = new mongoose.Schema({
  id: Number,
  styleId: Number,
  size: String,
  quantity: Number
});

const Skus = mongoose.model('Skus', skusSchema);

module.exports = Skus;