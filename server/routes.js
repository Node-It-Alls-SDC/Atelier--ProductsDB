const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MODELS
const Product = require('../db/models/product.js');
const Features = require('../db/models/features.js');
const Related = require('../db/models/related.js');
const Styles = require('../db/models/styles.js');
const Skus = require('../db/models/skus.js');
const Photos = require('../db/models/photos.js');


const getProducts = async (req, res) => {
  const queryId = Number(req.params.product_id);
  let product = await Product.aggregate([
    {
      $match: { id: queryId }
    },
    {
      $lookup: {
        from: 'features',
        localField: 'id',
        foreignField: 'product_id',
        as: 'features'
      }
    }
  ])
  res.send(product[0]);
}

const getStyles = async (req, res) => {
  const queryId = Number(req.params.product_id);

  let styles = await Styles.aggregate([
    {
      $match: { product_id: queryId }
    },
    {
      $project: { _id: 0, __v: 0}
    },
    {
      $lookup: {
        from: 'photos',
        localField: 'id',
        foreignField: 'styleId',
        as: 'photos'
      }
    },
    {
      $lookup: {
        from: 'skus',
        localField: 'id',
        foreignField: 'styleId',
        as: 'skus'
      }
    },
    {
      $addFields: {
        skus: {
          $arrayToObject: {
            $map: {
              input: '$skus',
              as: 'sku',
              in: [
                { $toString: '$$sku.id' },
                {
                  quantity: '$$sku.quantitiy',
                  size: '$$sku.size'
                }
              ]
            }
          }
        }
      }
    }
  ]);

  let result = {
    product_id: JSON.stringify(queryId),
    results: styles
  };

  res.send(result);
}

const getProductList = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const count = Number(req.query.count) || 5;

  const startId = (page - 1) * count;

  const list = await Product.find({
    id: {$gte: startId, $lte: startId + count}
  }, {
    _id: 0,
    updated_at: 0,
    __v: 0
  });

  res.send(list);
}

const getRelated = async (req, res) => {
  const queryId = req.params.product_id;

  const related = await Related.find({ current_product_id: queryId }, { _id: 0, related_product_id: 1 });
  const result = related.map((item) => item.related_product_id);
  res.send(result);
}

module.exports = { getProducts, getStyles, getProductList, getRelated };
