/*
 *@Description:  地址模拟测试
*/

const Address = require('../../models/Address')
const User = require('../../models/User')

!(
    async() =>{
        const user = await User.findOne({
            username: '罗翔'
        })
        const user_id = user._id
        const username = user.username
        /**
         * 创建新地址
         */
        await Address.create({
            uid: user_id,
            username:  username,
            recevierName: user.username,
            phoneNumber: '13433810972',
            city: '广州市',
            location: '广州市海珠区',
            specificAddress: '阅江西路222号'
            
        })
        await Address.create({
            uid: user_id,
            username:  username,
            recevierName: user.username,
            phoneNumber: '13433810974',
            city: '广州市',
            location: '广州市海珠区',
            specificAddress: '阅江西路333号'
            
        })

        /**
         * 获取当前用户的地址
         */
        // const addressList = await Address.find({uid:user_id}).sort({ updatedAt: -1})
        // console.log('addressList', addressList)


        /**
         *  根据id 返回地址
         */
        // const aid = '63494458e80581b9a02e2a0e'
        // const address = await Address.findById(aid)
        // console.log('address', address)

        /**
         *  更新收货地址
         */
        //  const aid = '63494764a22ecab73db8fa95'

        // const newAddress = await Address.findOneAndUpdate(
        //     {
        //         _id:aid,uid: user_id   
        //     },
        //     {
        //     recevierName: '张三'
        //     // phoneNumber: '111111111111',
        //     // city: '广州市',
        //     // location: '广州市天河区',
        //     // specificAddress: '阅江西路44444号'
        //     },
        //     { new: true })
        
        // console.log('newAddress', newAddress)
    }
)()