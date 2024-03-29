const mongoose = require('mongoose');

const deliveryAddressSchema = new mongoose.Schema({
    member : String,
    nameAddress: String,
}, {timestamps: true});

const deliveryAddress = mongoose.model('DeliveryAddress', deliveryAddressSchema,'DeliveryAddress');

module.exports = deliveryAddress;
