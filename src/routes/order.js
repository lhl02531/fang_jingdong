/*
 *@Description: order router
*/

const router = require('koa-router')()
const logicCheck = require('../middleware/loginCheck')
const { createOrder,getAllOrderByuid } = require('../controller/OrderController')
const { ErrorModel, SuccessModel } = require('../res-model')


router.prefix('/api/order')


// 创建订单
router.post('/', logicCheck, async function(ctx, next){
    const data = ctx.request.body
    const userId = ctx.session.userInfo.userId
    console.log(data)
    try {
        const newOrder = await createOrder(userId, data)
        ctx.body = new SuccessModel(newOrder, '创建订单成功')
    } catch (error) {
        console.log('创建订单出错', error)
        ctx.body = new ErrorModel(30001, `创建订单出错-- ${error}`)
    }

})

// 返回用户全部订单
router.get('/', logicCheck, async function(ctx, next){
    const userId = ctx.session.userInfo.userId
    const orderList = await getAllOrderByuid(userId)
    ctx.body = new SuccessModel(orderList) 

})



module.exports = router