const mongoose = require('mongoose');

const Styles = require('../db/models/styles.js');
const Photos = require('../db/models/photos.js');
const Skus = require('../db/models/skus.js');

const migratePhotos = async () => {
  try {
    const styles = await Styles.find();
    const photos = await Photos.find();

    for (let style of styles) {
      const stylePhotos = photos.filter((photo) => photo.styleId === styles.style_id);

      style.photos = stylePhotos.map((photo) => ({
        thumbnail_url: photo.thumbnail_url,
        url: photo.url
      }));

      await style.save();
    }

    console.log('Migration of Photos into Styles successful');
  } catch (err) {
    console.error(err);
  }
}
