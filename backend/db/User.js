const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    id:Number,
    rname:String,
    imgdata:String,
    address:String,
    price:String,
    rating:String,
    somedata:String,
})
module.exports = mongoose.model('carts',UserSchema)