const buildStyles = async (styles, photos, skus) => {
  try {
    const photosMap = photos.reduce((acc, photo) => {
      if (!acc[photo.styleId]) {
        acc[photo.styleId] = [];
      }
      acc[photo.styleId].push({
        thumbnail_url: photo.thumbnail_url,
        url: photo.url
      })
      return acc;
    }, {});
    console.log('photos hash map created');
    const skusMap = skus.reduce((acc, sku) => {
      if (!acc[sku.styleId]) {
        acc[sku.styleId] = [];
      }
      acc[sku.styleId][JSON.stringify(sku.id)] = {
        quantity: sku.quantity,
        size: sku.size
      };
      return acc;
    }, {});
    console.log('skus hash map created');
    for (let style of styles) {
      style.photos = photosMap[style.id] || [];
      style.skus = skusMap[style.id] || {};
    }

    return styles;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { buildStyles };