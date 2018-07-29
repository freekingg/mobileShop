const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema

const CategorySubSchema = new Schema({
    ID:{unique:true,type:String},
    MALL_CATEGORY_ID:{type:String},
    MALL_SUB_NAME:{type:String},
    COMMENTS:{type:String},
    SORT:{type:Number}
})

var CategorySubModel = mongoose.model('CategorySub',CategorySubSchema)
module.exports = CategorySubModel