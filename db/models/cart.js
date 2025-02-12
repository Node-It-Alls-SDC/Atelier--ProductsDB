const mongoose = require('mongoose');

// id,user_session,product_id,active
const cartSchema = new mongoose.Schema({
  id: Number,
  user_session: Number,
  product_id: Number,
  active: Number
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;