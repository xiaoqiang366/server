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
      sysname: 'xxx系统',
    })
    next();
  }
}

module.exports = new Home();
