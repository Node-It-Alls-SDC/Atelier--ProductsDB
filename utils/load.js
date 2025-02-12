const Product = require('../db/models/product.js');
const Features = require('../db/models/features.js');
const Related = require('../db/models/related.js');
const Skus = require('../db/models/skus.js');
const Styles = require('../db/models/styles.js');
const Cart = require('../db/models/cart.js');


const batchInsert = async (model, data) => {
  const batchSize = 10000;
  let batch = [];
  let batchCount = 0;

  for (let i = 0; i < data.length; i++) {
    batch.push(data[i]);

    if (batch.length === batchSize || i === data.length - 1) {
      try {
        await model.insertMany(batch);
        batch = [];
        batchCount++;
      } catch (err) {
        console.error(`Failed to insert batch: ${batchCount + 1}: `, err);
      }
    }
  }
}




const loadProduct = async (data) => {
  try {
    await batchInsert(Product, data);
    console.log('Products loaded into DB')
  }
  catch (err) {
    console.error('Error loading data: ', err);
  }
};

const loadFeatures = async (data) => {
  try {
    await batchInsert(Features, data);
    console.log('Features loaded into DB')
  }
  catch (err) {
    console.error('Error loading data: ', err);
  }
};

const loadRelated = async (data) => {
  try {
    await batchInsert(Related, data);
    console.log('Related loaded into DB')
  }
  catch (err) {
    console.error('Error loading data: ', err);
  }
};

const loadSkus = async (data) => {
  try {
    await batchInsert(Skus, data);
    console.log('Skus loaded into DB')
  }
  catch (err) {
    console.error('Error loading data: ', err);
  }
};

const loadStyles = async (data) => {
  try {
    await batchInsert(Styles, data);
    console.log('Styles loaded into DB')
  }
  catch (err) {
    console.error('Error loading data: ', err);
  }
};

const loadCart = async (data) => {
  try {
    await batchInsert(Cart, data);
    console.log('Cart loaded into DB')
  }
  catch (err) {
    console.error('Error loading data: ', err);
  }
};

module.exports = { loadProduct, loadFeatures, loadRelated, loadSkus, loadStyles, loadCart };