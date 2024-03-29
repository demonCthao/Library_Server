const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    name: String, // Ten sach
    price : Number, // Gia tien
    image : String, // Hinh anh
    goodsCategory : String, // The loai
}, { timestamps: true }); 

const Goods = mongoose.model('Goods', goodsSchema,'Goods');

module.exports = Goods;
