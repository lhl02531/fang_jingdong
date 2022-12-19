/*
 *@Description:  order controller
*/

const Order = require('../models/Order')
const Address = require('../models/Address')
const Product = require('../models/Product')
// const Shop = require('../models/Shop')

/**
 * 创建订单
 * @param {string} userId  用户id
 * @param {Object} data  用来创建订单的对象
 */
async function createOrder(userId, data){
    const {
        addressId,
        shopId,
        shopName,
        isCanceled=false,
        products = []
    } = data

    // 获取 address
    const address = await Address.findById(addressId)
    

    // products 取出 商品 id
    const pIds = products.map( p => p.id)

    // 根据 pIds 取到符合的商品列表
    // [ product1: {}, product2:{} ]
    const productList = await Product.find( {
        shopId,
        _id: {
            $in: pIds
        }
    })
    
    // 拼接上 Num
    //  [{ product1: {}, num:2}, { product2:{}, num:3}]
    const productListWithNum = productList.map( 
        item =>{
            const itemId = item.id

            const filterProduct = products.filter( item => item.id === itemId)
            if(filterProduct.length === 0){
                throw new Error('未找到对应id的商品')
            }

            return {
                product: item,
                orderSales: filterProduct[0].num
            }

        }
    )
    console.log('productListWithNum', productListWithNum)
    const newOrder = await Order.create({
        uid: userId,
        shopId,
        shopName,
        isCanceled,
        address,
        products: productListWithNum
    })

    return newOrder

}

/**
 * 返回当前用户的全部订单
 * @param {*} userId 用户id
 */
async function getAllOrderByuid(userId){

    const orderList = Order.find({
        uid: userId
    }).sort({ createdAt: -1 })
    return orderList
}

module.exports = {

    createOrder,
    getAllOrderByuid
}