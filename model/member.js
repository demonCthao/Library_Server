const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    fullname:String,
    username:String,
    email:String,
    password:String,
    phoneNumber:String,
    address:String,
    image:String
},{
    timestamps:true
});

const Member = mongoose.model('Member',memberSchema,'Member')
module.exports=Member;