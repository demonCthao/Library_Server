const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    fullName:String,
    birthday:Date,
    nationality:String,
    image:String,
    biography:String,
},{
    timestamps:true
});
const Author = mongoose.model('Author',authorSchema,'Author');
module.exports=Author;
