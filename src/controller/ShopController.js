/*
 *@Description: shop controller
*/

const Product = require('../models/Product')
const Shop = require('../models/Shop')

/**
 * 
 * @returns 全部商店列表
 */
async function getShopList(){
    const shopList = await Shop.find().sort()
    return shopList
}

/**
 * 返回单个商店，根据商店id
 * @param {string} shopid 商店id
 */
async function getShopByShopid(shopid){
    const shop = await Shop.findById(shopid)
    return shop
}

/**
 *  返回某个商店里的商品列表
 * @param {string} shopId 商店id
 * @param {string} tab  tab选项  默认是all
 */
async function getProductListBySId(shopId, tab = 'all'){

    const productList = await Product.find({
        shopId,
        tabs:{
            $in: tab
        }
    })
    return productList
}

module.exports = {
    getShopList,
    getShopByShopid,
    getProductListBySId
}