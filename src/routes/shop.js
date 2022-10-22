/*
 *@Description: shop router
*/
const router = require('koa-router')()
const { 
    getShopList,
    getShopByShopid,
    getProductListBySId
} = require('../controller/ShopController')
const {     SuccessModel,ErrorModel } = require('../res-model/index')


router.prefix('/api/shop')


// 附件（热门店铺）
router.get('/hot-list', async function (ctx, next){
    const shopList = await getShopList()
    ctx.body = new SuccessModel(shopList)
})


// 商店详情

router.get('/:shopId', async function (ctx, next){
    const shopId = ctx.params.shopId
    const shop = await getShopByShopid(shopId)
    ctx.body = new SuccessModel(shop)
})

// 查询某个商店的商品列表

router.get('/:shopId/products', async function (ctx, next){
    const shopId = ctx.params.shopId
    const tab = ctx.query.tab
    const productList = await getProductListBySId(shopId, tab)
    ctx.body = new SuccessModel(productList)
    
})


module.exports = router
