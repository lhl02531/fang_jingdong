/*
 *@Description: shop model
*/

const mongoose = require('../db/db')

const ShopSchema = mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    sales: Number,
    expressLimit:{
        type: Number,
        default: 0
    },
    expressPrice: Number,
    slogan: String
},{ timestamps:true })


const Shop = mongoose.model('shop', ShopSchema)

module.exports = Shop