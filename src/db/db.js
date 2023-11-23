/**
 *  @description mongoose 连接数据库
 */

const mongoose = require('mongoose')


const url = 'mongodb://127.0.0.1:27017'

const dbName = "jingdong"

mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', err =>{
    console.error('mongodb 连接出错', err)
})



module.exports = mongoose   
