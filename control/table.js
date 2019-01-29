const TableModel = require("../models/table");

class Table {
  // 添加分类
  async add(ctx) {
    const { user } = ctx.state;
    if (user.role == 0) {
      const {
        num,
      } = ctx.request.body;
      if (!num) return ctx.sendError(-1, '参数错误');

      const queryResult = await TableModel.find({ num });
      if (queryResult && queryResult.length === 0) {
        // 添加新的分类
        const model = new TableModel({
          num
        });
        const result = await model.save();
        if (result) {
          ctx.send(result);
        } else {
          ctx.sendError(-2, '服务器错误');
        }
      } else {
        return ctx.sendError(0, '当前分类已存在, 请勿重复添加');
      }
    } else {
      return ctx.sendError(0, '没有权限');
    }
  }

  // 获取所有分类列表
  async list(ctx) {
    const result = await TableModel.find();
    if (result) {
      ctx.send({
        list: result,
        total: result.length
      })
    } else {
      ctx.send({ list: [] })
    }
  }

  // 删除分类
  async delete(ctx, next) {
    const { user } = ctx.state;
    if (user.role == 0) {
      const { id } = ctx.request.body;
      if (!id) return ctx.sendError(-1, '参数错误');
      const result = await TableModel.findOne({ _id: id });
      if (result) {
        await TableModel.deleteOne({ _id: id });
        ctx.send('删除成功');
      } else {
        ctx.sendError(0, '当前桌号不存在')
      }
    } else {
      ctx.sendError(0, '没有权限')
    }

  }

  async update(ctx, next) {
    const user = await verifyToken(ctx, next);
    if (!user) return ctx.sendError(401, '请先登录');
    const { id, name } = ctx.request.body;
    if (!id || !name) return ctx.sendError(-1, '参数错误');

    // 添加前检查是否存在
    const result = await TableModel.find({ _id: id });
    if (!result || result.length === 0) return ctx.sendError(0, '当前分类不存在');

    const queryResult = await TableModel.find({ name });
    if (queryResult && queryResult.length > 0) return ctx.sendError(0, '当前分类已存在, 勿重复添加');

    const updateResult = await TableModel.updateOne({ _id: id }, { name, updateTime: new Date() });
    if (updateResult) {
      ctx.send('更新成功')
    } else {
      ctx.sendError(0, '更新失败')
    }
  }
}


module.exports = new Table();
