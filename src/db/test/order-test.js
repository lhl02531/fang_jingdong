/**
 * @descrption 订单 数据操作
 */


const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Product')


!( 
    async ( ) =>{


        const requestBody = {
            addressId: '63494764a22ecab73db8fa93',
            shopId: '63494c718fafa22d4ed95e31',
            shopName: '沃尔玛',
            isCanceled: false, // 订单是否被取消
            products:[
                {
                    id: '63495d7976fbd5548a86c903',
                    nums: 3
                },{
                    id: '63495d7976fbd5548a86c901',
                    nums: 5
                }
            ]
        }

        // 获取 address
        const address = await Address.findById(requestBody.addressId)

        // 获取 商品列表 map
        const pIds = requestBody.products.map( p => p.id)

        const productList = await Product.find({
            // 要同时满足 既是 沃尔玛的 又是 其下的商品
            // 1. shopid 
            // 2. pids 
            shopId: requestBody.shopId,
            _id: {
                $in: pIds
            }
        })


        const productListWithSales = productList.map( p =>{
            // 商品 id
            const id = p._id.toString()

            // 找到商品的购买数量， 从request body 分离出id 相等时 的 num
            const filterProducts = requestBody.products.filter(item => item.id === id)
            // console.log('filterProduct', filterProducts)
            if(filterProducts.length === 0){
                throw Error('未找到匹配的销量数据')
            }

            return {
                product: p,
                orderSales: filterProducts[0].nums
            }
        })

        // console.log(productListWithSales)


        await Order.create( {
            uid: '634929d51957e18af338109e',
            shopid: requestBody.shopId,
            shopName: requestBody.shopName,
            isCanceled: requestBody.isCanceled,
            address: address,
            products: productListWithSales
        })

    }
)()