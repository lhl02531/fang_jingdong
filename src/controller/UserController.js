
const User = require('../models/User')
/**
 *
 * 用户注册
 * @param {string} username 用户名
 * @param {string} password 用户密码
 * @return {*} 
 */
async function register(username, password){
    const newUser = await User.create({
        username,
        password
    })
    return newUser
}

/**
 * 登录
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns 
 */
async function login(username, password){
    const user = await User.findOne({
        username,
        password
    })
    console.log(user)
    if(user != null){
        return { flag: true, userId: user._id, userName: user.username }
    }else{
        return { flag: false }
    }
}

module.exports = {
    register, login
}