const mongoose = require('mongoose');

const photosSchema = new mongoose.Schema({
  id: Number,
  styleId: Number,
  url: String,
  thumbnail_url: String
});

photosSchema.index({styleId: 1});

const Photos = mongoose.model('Photos', photosSchema)

Photos.createIndexes()
  .catch((err) => console.error(err));

module.exports = Photos;