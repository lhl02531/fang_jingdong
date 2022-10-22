/*
 *@Description:  操作成功时，返回的统一格式
*/

class SuccessModel{
    /**
     * 构造函数，统一操作成功返回格式
     * @param {string} data 返回数据 默认是操作成功
     * @param {string} message 返回信息
     */
    constructor( data , message= '操作成功'){
        this.errno = 0
        if(data != null){
            this.data = data
        }
        this.message = message
    }
}

module.exports = SuccessModel