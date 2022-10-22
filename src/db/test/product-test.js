/*
 *@Description: product test
*/

const Product = require('../../models/Product')


!(
    async ()=>{
        // fruit,seckill,all
        const shopId_wal = '63494c718fafa22d4ed95e31'
        const shopId_sam = '63494c718fafa22d4ed95e34'



        /**
         * 查询某个商店， 某个tab下的商品
         */
        // const productList  = await Product.find({
        //     shopId: shopId_wal,
        //     tabs: {
        //         $in: 'fruit'
        //     }
        // })
        // const productList  = await Product.find({
        //     shopId: shopId_wal,
        //     tabs: {
        //         $in: 'seckill'
        //     }
        // })
        // console.log('productList fruit tab', productList)





        /**
         * 创建商品
         */

        await Product.create({
            shopId: shopId_wal,
            productName: '苹果',
            imgUrl: '/images/product/apple.jpeg',
            sales: 10,
            price: 22.6,
            oldPrice: 28.6,
            tabs: ['all','fruit','seckill']
        })
        await Product.create({
            shopId: shopId_wal,
            productName: '葡萄',
            imgUrl: '/images/product/grape.jpg',
            sales: 10,
            price: 25.6,
            oldPrice: 32.6,
            tabs: ['all','fruit']
        })
        await Product.create({
            shopId: shopId_wal,
            productName: '桃子',
            imgUrl: '/images/product/peach.jpg',
            sales: 10,
            price: 24.6,
            oldPrice: 30.6,
            tabs: ['all','fruit']
        })
        await Product.create({
            shopId: shopId_wal,
            productName: '西瓜',
            imgUrl: '/images/product/watermelon.jpg',
            sales: 10,
            price: 30.6,
            oldPrice: 40.6,
            tabs: ['all','fruit']
        })

        // 山姆
        await Product.create({
            shopId: shopId_sam,
            productName: '苹果',
            imgUrl: '/images/product/apple.jpeg',
            sales: 10,
            price: 22.6,
            oldPrice: 28.6,
            tabs: ['all','fruit']
        })
        await Product.create({
            shopId: shopId_sam,
            productName: '葡萄',
            imgUrl: '/images/product/grape.jpg',
            sales: 10,
            price: 25.6,
            oldPrice: 32.6,
            tabs: ['all','fruit']
        })
        await Product.create({
            shopId: shopId_sam,
            productName: '桃子',
            imgUrl: '/images/product/peach.jpg',
            sales: 10,
            price: 24.6,
            oldPrice: 30.6,
            tabs: ['all','fruit','seckill']
        })
        
    }
)()