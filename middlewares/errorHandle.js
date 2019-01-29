// 错误处理
module.exports = async (ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      return ctx.sendError(-1, '请先登录');
    } else {
      throw err;
    }
  })
}

