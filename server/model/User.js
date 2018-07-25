const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var UserSchema = new Schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
    passWord:{
        type:String,
        required:true
    },
    registerDate:{
        type:Date,
        default:Date.now
    }
})
var UserlModel = mongoose.model('User',UserSchema)
module.exports = UserlModel