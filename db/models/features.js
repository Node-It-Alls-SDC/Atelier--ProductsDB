const mongoose = require('mongoose');

const featuresSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  feature: String,
  value: String
});

const Features = mongoose.model('Features', featuresSchema)

module.exports = Features;