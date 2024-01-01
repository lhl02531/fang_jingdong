/*
 *@Description: Order Model 注意是复制关系
 */

const mongoose = require("../db/db");

const OrderSchema = mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    shopid: String,
    shopName: String,
    isCanceled: {
      type: Boolean,
      default: false,
    },
    address: {
      recevierName: String,
      phoneNumber: String,
      province: String,
      city: String,
      county: String,
      addressDetail: String,
    },
    products: [
      {
        product: {
          shopId: String,
          productName: String,
          imgUrl: String,
          sales: Number,
          price: Number,
          oldPrice: Number,
        },
        orderSales: Number,
      },
    ],
  },
  { timestamps: true }
);

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
