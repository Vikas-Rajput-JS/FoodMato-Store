const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({

    id:Number,
    rname:String,
    imgdata:String,
    delimg:String,
    address:String,
    price:Number,
    rating:String,
    qnty:String,
    arrimg:String,
    somedata:String,
})
module.exports = mongoose.model('Foods',UserSchema)
 