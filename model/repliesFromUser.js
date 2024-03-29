const mongoose = require('mongoose');

const repliesFromUserSchema = new mongoose.Schema({
    member: String, // Thanh vien
    content:String,
    repliesDate: Date
}, { versionKey: false });
const RepliesFromUser = mongoose.model('RepliesFromUser', repliesFromUserSchema,'RepliesFromUser');
module.exports = RepliesFromUser;
