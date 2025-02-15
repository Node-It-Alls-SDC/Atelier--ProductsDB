const mongoose = require('mongoose');

const featuresSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  feature: String,
  value: String
});

featuresSchema.index({product_id: 1});

const Features = mongoose.model('Features', featuresSchema)

Features.createIndexes()
  .catch((err) => console.error(err));

module.exports = Features;