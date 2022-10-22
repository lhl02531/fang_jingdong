/**
 * @description 登录验证中间件
 */
const { ErrorModel } = require('../res-model/index')
module.exports = async (ctx, next) =>{
    const session = ctx.session
    if(session && session.userInfo){
        await next()
        return
    }
    ctx.body = new ErrorModel(1003, '未登录， 请登录后再尝试')
    // ctx.body ={
    //     errno: -1,
    //     message: '登录验证失败'
    // }
}