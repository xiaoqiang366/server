const CategoryModel = require("../models/category");
const MenuModel = require("../models/menu");
const mongoose = require('mongoose');

class Category {
  // 添加分类
  async add(ctx, next) {
    const { user } = ctx.state;
    if (user) {
      const {
        name,
        desc = '暂无描述',
      } = ctx.request.body;
      if (!name) return ctx.sendError(-1, '参数错误');

      const queryResult = await CategoryModel.find({ name });
      if (queryResult && queryResult.length  === 0) {
        // 添加新的分类
        const model = new CategoryModel({
          name,
          desc,
          createTime: new Date(),
          updateTime: new Date()
        });
        const result = await model.save();
        if (result) {
          ctx.send({
            name: result.name,
            desc: result.desc,
            createTime: result.createTime,
            categoryId: result.id
          });
        } else {
          ctx.sendError(-2, '服务器错误');
        }
      } else {
        return ctx.sendError(0, '当前分类已存在, 请勿重复添加');
      }
    } else {
      return ctx.sendError(0, '登录信息过期');
    }
  }

  // 获取所有分类列表
  async list(ctx, next) {
    const result = await CategoryModel.find();
    if (result) {
      ctx.send({
        list: result.map(item => {
          return {
            id: item.id,
            name: item.name,
            desc: item.desc,
            createTime: item.createTime,
            updateTime: item.updateTime
          }
        }),
        total: result.length
      })
    } else {
      ctx.send({list: []})
    }
  }

  // 删除分类
  async delete(ctx, next) {
    const { user } = ctx.state;
    if (!user) return ctx.sendError(401, '请先登录');
    const { id } = ctx.request.body;
    if (!id) return ctx.sendError(-1, '参数错误');

    const result = await CategoryModel.findOne({ _id: id});
    if (result) {
      const mResult = await MenuModel.find({ cid: id });
      if (mResult && mResult.length > 0) {
        return ctx.sendError(0, '当前类目下还有菜品，不可以删除');
      }
      await CategoryModel.deleteOne({ _id: id });
      ctx.send('删除成功');
    } else {
      ctx.sendError(0, '当前分类不存在')
    }
  }

  async update(ctx, next) {
    const { user } = ctx.state;
    if (!user) return ctx.sendError(401, '请先登录');
    const { id, name, desc } = ctx.request.body;
    if (!id || !name) return ctx.sendError(-1, '参数错误');
    if (id && !mongoose.Types.ObjectId.isValid(id)) {
      return ctx.sendError('000002', '分类id错误');
    }

    // 添加前检查是否存在
    const result = await CategoryModel.find({ _id: id });
    if (!result || result.length === 0) return ctx.sendError(0, '当前分类不存在');

    const queryResult = await CategoryModel.find({ name, _id: { $ne: id } });
    if (queryResult && queryResult.length > 0) return ctx.sendError(0, '当前分类已存在, 勿重复添加');

    const updateData = { name, updateTime: new Date() };
    if (desc) Object.assign(updateData, { desc });
    const updateResult = await CategoryModel.updateOne({ _id: id }, updateData);
    if (updateResult) {
      ctx.send('更新成功')
    } else {
      ctx.sendError(0, '更新失败')
    }
  }
}


module.exports = new Category();
