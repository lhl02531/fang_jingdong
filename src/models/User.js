/*
 *@Description: User model
*/


const mongoose = require('../db/db')

const UserSchema = mongoose.Schema({
    
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: String
}, {    timestamps:true })


const User = mongoose.model('user', UserSchema)

module.exports = User