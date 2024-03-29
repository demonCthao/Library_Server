const mongoose = require('mongoose');

const goodsCategorySchema = new mongoose.Schema({
    name: String, // Ten the loai
}, { timestamps: true });

const GoodsCategory = mongoose.model('goodsCategory', goodsCategorySchema,'goodsCategory');

module.exports = GoodsCategory;
