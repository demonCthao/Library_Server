const mongoose = require('mongoose');

const librarianSchema = new mongoose.Schema({
    fullname: String,
    username: String,
    password : String,
    image : String,
    statusAdmin : String,
    imageQRCode:String,
},{
    timestamps:true
});

const Librarian = mongoose.model('Librarian', librarianSchema,'Librarian');

module.exports = Librarian;