const mongoose = require('mongoose');

const skusSchema = new mongoose.Schema({
  id: Number,
  styleId: Number,
  size: String,
  quantity: Number
});

skusSchema.index({styleId: 1});

const Skus = mongoose.model('Skus', skusSchema);

Skus.createIndexes()
  .catch((err) => console.error(err));

module.exports = Skus;