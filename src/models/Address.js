/*
 *@Description: address model
*/

const mongoose = require('../db/db')

const AddressSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    username: String,
    recevierName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    city: String,
    location: String,
    specificAddress: String,
    defaultAddress: Boolean
}, { timestamps: true })


const Address = mongoose.model('address', AddressSchema)

module.exports = Address