const express = require('express');
const { extract } = require('./extract.js');
const { transformProduct, transformFeatures, transformRelated, transformSkus, transformStyles, transformCart, transformPhotos } = require('./transformers.js');
const { loadProduct, loadFeatures, loadRelated, loadSkus, loadStyles, loadCart, loadPhotos } = require('./load.js');
const { buildStyles } = require('./combiners.js');

const handleETL = async (req, res) => {
  try {
    // EXTRACT
    // console.log('EXTRACTING DATA');
    // console.log('Extracting Products...');
    // const extractedProduct = await extract('db/data/product.csv');
    // console.log('Extracting Features...');
    // const extractedFeatures = await extract('db/data/features.csv');
    // console.log('Extracting Related...');
    // const extractedRelated = await extract('db/data/related.csv');
    // console.log('Extracting Skus...');
    // const extractedSkus = await extract('db/data/skus.csv');
    // console.log('Extracting Styles...');
    // const extractedStyles = await extract('db/data/styles.csv');
    // console.log('Extracting Cart...');
    // const extractedCart = await extract('db/data/cart.csv');
    console.log('Extracting Photos...');
    const extractedPhotos = await extract('db/data/photos.csv');

    // TRANSFORM
    // console.log('TRANSFORMING DATA');
    // console.log('Transforming Products...');
    // const transformedProducts = await transformProduct(extractedProduct);
    // console.log('Transforming Features...');
    // const transformedFeatures = await transformFeatures(extractedFeatures);
    // console.log('Transforming Related...');
    // const transformedRelated = await transformRelated(extractedRelated);
    // console.log('Transforming Skus...');
    // const transformedSkus = await transformSkus(extractedSkus);
    // console.log('Transforming Styles...');
    // const transformedStyles = await transformStyles(extractedStyles);
    // console.log('Transforming Cart...');
    // const transformedCart = await transformCart(extractedCart);
    console.log('transforming Photos...');
    const transformedPhotos = await transformPhotos(extractedPhotos);


    // COMBINE STYLES
    // console.log('Combining pieces of Styles...');
    // const combinedStyles = await buildStyles(transformedStyles, transformedPhotos, transformedSkus);

    // LOAD
    // console.log('Loading Products into DB...');
    // await loadProduct(transformedProducts);
    // console.log('Loading Features into DB...');
    // await loadFeatures(transformedFeatures);
    // console.log('Loading Related into DB...');
    // await loadRelated(transformedRelated);
    // console.log('Loadings Skus into DB...');
    // await loadSkus(transformedSkus);
    // console.log('Loading Styles into DB...');
    // await loadStyles(transformedStyles);
    // console.log('Loading Cart into DB...');
    // await loadCart(transformedCart);
    console.log('Loading Photos into DB...');
    await loadPhotos(transformedPhotos);

    res.status(200).send('ETL Process Complete');
  } catch (err) {
    res.status(500).send('ETL Process Failed');
    console.error(err);
  }
}

module.exports = { handleETL };