/*
 *@Description:  操作失败时，返回的统一格式
*/
class ErrorModel{
    /**
     * 构造函数，统一操作失败返回格式
     * @param {number} errCode 错误码
     * @param {string} message 错误信息
     */
    constructor(errCode = 0, message = '操作失败'){
        this.errno = errCode
        this.message = message
    }
}

module.exports = ErrorModel
