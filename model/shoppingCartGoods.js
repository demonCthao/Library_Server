const mongoose = require('mongoose');

const shoppingCartGoodsSchema = new mongoose.Schema({
    member: String,
    goods: String
},{
    timestamps:true
});
const ShoppingCartGoods = mongoose.model('ShoppingCartGoods', shoppingCartGoodsSchema,'ShoppingCartGoods');

module.exports = ShoppingCartGoods;
