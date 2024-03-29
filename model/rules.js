const mongoose = require('mongoose');

const rulesSchema = new mongoose.Schema({
    content:String,
    librarian:String,
    rulesDate: Date
},{timestamps:true});
const rules = mongoose.model('Rules', rulesSchema,'Rules');
module.exports = rules;
