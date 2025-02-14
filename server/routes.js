const express = require('express');
const app = express();

// MODELS
const Product = require('../db/models/product.js');
const Features = require('../db/models/features.js');
const Related = require('../db/models/related.js');
const Styles = require('../db/models/styles.js');
const Skus = require('../db/models/skus.js');
const Photos = require('../db/models/photos.js');



const getProducts = async (req, res) => {
  const queryId = req.params.product_id;
  const product = Product.find({id: queryId})
    .then((results) => {
      const buildProduct = {
        id: results[0].id,
        name: results[0].name,
        slogan: results[0].slogan,
        description: results[0].description,
        category: results[0].category,
        default_price: results[0].default_price
      }
      Features.find({product_id: queryId})
        .then((features) => {
          const finalProduct = Object.assign({}, buildProduct, { features: features });
          res.send(finalProduct);
        })
    })
    .catch((err) => console.error(err));
}

const getStyles = async (req, res) => {
  const queryId = req.params.product_id;
  const styles = { product_id: queryId };
  const tempStyles = [];
  const findStyles = Styles.find({id: queryId})
    .then((results) => {
      const promises = results.map((style) => ({
        style_id: style.id,
        name: style.name,
        original_price: style.original_price,
        sale_price: style.sale_price,
        'default?': style['default?']
      }))

      Promise.all(promises).then((results) => {
        tempStyles = results;
      })
    })
    .catch((err) => console.error(err));

  const photoPromises = tempStyles.map((style) => {
    const photos = Photos.find({styleId: style.style_id}, {_id: 0, thumbnail_url: 1, url: 1})
      .then((results) => {
        style.photos = results;
      })
      .catch((err) => console.error(err));
  })

  Promise.all(photoPromises).then((results) => {
    tempStyles = results;
  });

  const tempSkus = {};
  const skusPromises = tempStyles.map((style) => {
    const skus = Skus.find({styleId: style.style_id}, {_id: 0, quantity: 1, size: 1})
      .then((results) => {
        results.forEach((sku) => {
          tempSkus[JSON.stringify(sku.id)] = sku;
        })
        style.skus = tempSkus;
      })
      .catch((err) => console.error(err));
  })

  Promise.all(skusPromises).then((results) => {
    tempStyles = results;
    console.log(tempStyles);
  });
  res.send(tempStyles);
}

module.exports = { getProducts };
