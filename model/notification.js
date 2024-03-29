const mongoose = require('mongoose');

const notificationsSchema = new mongoose.Schema({
    member: String, // Thanh vien
    content:String,
    librarian:String,
    status:Number,
    notificationDate: Date
},{
    timestamps:true
});
const notifications = mongoose.model('Notifications', notificationsSchema,'Notifications');
module.exports = notifications;