const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-generic-session");
const cors = require("koa2-cors");

const users = require("./routes/users");
const address = require("./routes/address");
const shop = require("./routes/shop");
const order = require("./routes/order");

// error handler
onerror(app);

// middlewares

// 跨域
app.use(
  cors({
    // origin: 'http://localhost:8080',  // 前端 origin
    // origin: '*',
    credentials: true,
  })
);

// session 配置
app.keys = ["qwi*&^*1341AKSDJF"]; // 密钥
app.use(
  session({
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(
  require("koa-static")(__dirname + "/public", {
    maxage: 24 * 60 * 60 * 1000,
  })
);

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes address
app.use(users.routes(), users.allowedMethods());
app.use(address.routes(), address.allowedMethods());
app.use(shop.routes(), shop.allowedMethods());
app.use(order.routes(), order.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
