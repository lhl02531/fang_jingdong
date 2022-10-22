/*
 *@Description: product model
*/

const mongoose = require('../db/db')

const ProductSchema = mongoose.Schema({
    shopId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    imgUrl: String,
    sales: Number,
    price: Number,
    oldPrice: Number,
    tabs: [String]
}, { timestamps: true})

const Product = mongoose.model('product', ProductSchema)

module.exports = Product