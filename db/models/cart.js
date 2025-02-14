const mongoose = require('mongoose');

// id,user_session,product_id,active
const cartSchema = new mongoose.Schema({
  id: Number,
  user_session: Number,
  product_id: Number,
  active: Number
});

cartSchema.index({user_session: 1});

const Cart = mongoose.model('Cart', cartSchema);

Cart.createIndexes()
  .then(() => console.log('Cart Indexes Created'))
  .catch((err) => console.error(err));

module.exports = Cart;