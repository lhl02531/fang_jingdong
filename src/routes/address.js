/*
 *@Description: address router
 */

const router = require("koa-router")();
const logicCheck = require("../middleware/loginCheck");
const { SuccessModel, ErrorModel } = require("../res-model");
const {
  createAddress,
  getAllAddressByUid,
  getAddressByAid,
  updateAddressByAid,
  getAddressByUid,
  getDefaultAddress,
  delAddressByAid,
} = require("../controller/AddressController");
const loginCheck = require("../middleware/loginCheck");

router.prefix("/api/user/address");

// 新建收获地址
router.post("/", logicCheck, async function (ctx, next) {
  const data = ctx.request.body;
  const { userId, userName } = ctx.session.userInfo;
  console.log("新建地址 data", data);
  try {
    const result = await createAddress(data, userId, userName);
    ctx.body = new SuccessModel(result, "创建地址成功");
  } catch (error) {
    console.error("创建地址失败", error);
    ctx.body = new ErrorModel(2001, `创建地址失败--${error}`);
  }
});

// 获取收货地址
router.get("/", logicCheck, async function (ctx, next) {
  const { userId } = ctx.session.userInfo;

  const result = await getAllAddressByUid(userId);
  ctx.body = new SuccessModel(result, "获取全部地址成功");
});

// 获取单个收货地址
router.get("/:aid", logicCheck, async function (ctx, next) {
  // :id 通过ctx.params.id
  const aid = ctx.params.aid;
  const address = await getAddressByAid(aid);
  ctx.body = new SuccessModel(address, "返回单个地址成功");
});

// 获取默认地址
router.get("/default/1", loginCheck, async function (ctx, next) {
  const { userId: uid } = ctx.session.userInfo;
  // const result = await getDefaultAddress(uid);
  // if (result) ctx.body = new SuccessModel(result, "返回默认地址成功");
  // else {
  //   // const address = await getAddressByAid();
  //   // ctx.body = new SuccessModel(address, "返回单个地址成功");
  // }
  const result = await getDefaultAddress(uid);
  ctx.body = new SuccessModel(result, "返回默认地址");
});

// 更新收货地址
router.patch("/:aid", logicCheck, async function (ctx, next) {
  const aid = ctx.params.aid;
  const uid = ctx.session.userInfo.userId;
  const data = ctx.request.body;
  try {
    const result = await updateAddressByAid(aid, uid, data);
    ctx.body = new SuccessModel(result, "更新成功");
  } catch (error) {
    console.error("", error);
    ctx.body = new ErrorModel(20022, "更新地址失败");
  }
});

// 删除收获地址
router.delete("/:aid", logicCheck, async function (ctx, next) {
  const aid = ctx.params.aid;
  const uid = ctx.session.userInfo.userId;
  try {
    const result = await delAddressByAid(aid, uid);
    ctx.body = new SuccessModel(result, "删除成功");
  } catch (error) {
    ctx.body = new ErrorModel(20023, "删除地址失败");
  }
});

module.exports = router;
