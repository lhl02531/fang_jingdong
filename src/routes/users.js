const router = require("koa-router")();
const { register, login } = require("../controller/UserController");
const { SuccessModel, ErrorModel } = require("../res-model/index");
router.prefix("/api/user");

router.post("/register", async function (ctx, next) {
  const { username, password, confirm_password } = ctx.request.body;
  if (password !== confirm_password) {
    ctx.body = new ErrorModel(1001, "注册失败-两次密码不一致");
  }
  try {
    const newUser = await register(username, password);
    newUser.password = undefined;
    ctx.body = new SuccessModel(newUser, "注册成功");
  } catch (error) {
    ctx.body = new ErrorModel(1001, `注册失败`);
  }
});

router.post("/login", async function (ctx, next) {
  const { username, password } = ctx.request.body;
  const result = await login(username, password);
  if (result.flag) {
    // 登录成功，写入session
    ctx.session.userInfo = {
      userId: result.userId,
      userName: result.userName,
    };

    ctx.body = new SuccessModel(null, "登录成功");
  } else {
    ctx.body = new ErrorModel(1002, "登录失败");
  }
});

module.exports = router;
