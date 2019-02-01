class Home {
  // 欢迎
  welcome(ctx, next) {
    ctx.send({
      message: `欢迎进入xxx系统. 当前时间: ${new Date().toUTCString()}.`
    })
    next();
  }

  // 系统信息
  system(ctx, next) {
    ctx.send({
      version: '0.0.1',
      sysname: '点餐后台管理系统',
      logo: 'http://116.62.147.91:3030/img/logo.png',
      slogon: '2019学习路上',
      desc: '本项目是一款前后端分离全栈开发项目，本次项目做一个进店点餐系统，从一个真实的快餐店，饭店等角度出发。实现手机点餐的功能。前端采用 vue 框架构建,后台使用 Koa2 框架构建,MongoDB 数据库,开发过程为 git 分支管理多人协作开发。'
    })
    next();
  }
}

module.exports = new Home();
