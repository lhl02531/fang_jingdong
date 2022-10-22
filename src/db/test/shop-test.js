/**
 * shop data test
 */

const Shop = require('../../models/Shop')

!(
    async () =>{
        /**
         *  创建shop
         * C:\Users\lv\Desktop\慕家具\fang_jingdong_server\src\public\images\shop\sam.jpeg
         */
        // await Shop.create({
        //     shopName: '沃尔玛',
        //     imgUrl: '/images/shop/wmt.jpeg',
        //     sales: 10000,
        //     expressLimit: 0,
        //     expressPrice:5,
        //     slogan: 'VIP尊享满89元减4元运费券（每月3张）'
        // })
        // await Shop.create({
        //     shopName: '山姆会员商店',
        //     imgUrl: '/images/shop/sam.jpeg',
        //     sales: 2000,
        //     expressLimit: 0,
        //     expressPrice:5,
        //     slogan: '联合利华洗护满10减5'
        // })



        /**
         * 附件（热门） 商店
         */

        // const shopList = await Shop.find().sort()
        // console.log('shopList', shopList)


        /**
         * 获取商店详情 by shopid
         */

        const shopid = '63494c718fafa22d4ed95e34'
        const shop = await Shop.findById(shopid)
        console.log('shop', shop)
        


        /**
         * 
         */



    }
)()