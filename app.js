const Koa = require('koa');
const static = require('koa-static');
const logger = require('koa-logger');
const body = require('koa-body');
const path = require('path');
const jwt = require('koa-jwt'); // 用于路由权限控制

const {
  jwtSecret,
  serverPort
} = require('./config/config');
const router = require('./routers/router');
const errorHandle = require('./middlewares/errorHandle'); //错误处理
const sendHandle = require('./middlewares/sendHandle'); // 数据返回统一处理

const app = new Koa();
app
  .use(sendHandle()) // 数据返回统一处理
  .use(errorHandle)
  .use(jwt({
    secret: jwtSecret
  }).unless({
    path: [
      /^\/user\/login\/?$/i,
      /^\/user\/reg/i,
      /^\/category\/list\/?$/i,
      /^\/menu\/allList\/?$/i,
      /^\/menu\/getListByCid\/?$/i,
      /^\/apidoc/i,
      /^\/avatar/i,
      /^\/img/i,
      /^\/?$/i,
      /^\/system/i,
      /^\/upload/i,
      /^\/table\/list/i,
      /^\/order\/add/i,
    ]
  })) // token处理
  .use(logger()) // 日志
  .use(body({
    multipart: true,
    formidable: {
      maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
    }
  }))
  .use(static(path.join(__dirname, './public')))
  .use(router.routes()).use(router.allowedMethods())

app.listen(serverPort, () => {
  console.log(`Server is running at http://127.0.0.1:${serverPort}`);
  init();
})

// 系统初始化操作
// 1. 创建一个超级管理员用户 admin/admin
function init() {
  // const request = require('request');
  // request.post(`http://127.0.0.1:${serverPort}/user/reg`, {
  //   form: {
  //     username: 'admin',
  //     password: 'admin',
  //     role: 0
  //   }
  // })

  const { db } = require('./schema/config')
  const UserSchema = require('./schema/user')
  const encrypt = require('./util/encrypt')
  const User = db.model('users', UserSchema)
  User.find({ username: "admin" }).then(data => {
    if (data.length === 0) {
      new User({
        username: "admin",
        password: encrypt("admin"),
        role: 0,
      }).save().then(data => {
        console.log("管理员用户名 -> admin,密码 -> admin")
      }).catch(err => {
        console.log("管理员账号检查失败")
      })
    } else {
      console.log('管理员用户名:admin  密码 -> admin')
    }
  })
}
