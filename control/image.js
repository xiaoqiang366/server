const fs = require('fs');
const path = require('path');
const ImageModel = require("../models/image");

class ImageManage {
  // 上传
  async upload(ctx, data) {
    const result = await new ImageModel(data).save();
    return result !== null ? ctx.send({
      id: result.id,
      url: result.url,
      group: result.group,
      name: result.name
    }, '上传成功') : ctx.sendError('000002', '注册失败');
  }

  // 图片列表查询
  async query(ctx) {
    let { group, pageSize = 10, pageNum = 1 } = ctx.request.query;
    group = group || 'default';

    const total = await ImageModel.find({ group }).countDocuments();
    let result = await ImageModel.find({ group }).sort({group: 1}).skip((--pageNum) * (+pageSize)).limit(+pageSize);
    if (result) {
      if (result.length > 0) {
        result = result.map(item => {
          return {
            id: item._id,
            url: item.url,
            name: item.name,
            group: item.group,
            createtime: item.createtime
          };
        })
        return ctx.send({
          list: result,
          totalCount: total
        }, '查询成功')
      }
      return ctx.send({
        list: [],
        totalCount: total
      }, '查询成功')
    } else {
      return ctx.sendError('-1', '查询错误')
    }
  }

  // 图片素材删除
  async delete(ctx) {
    const { user } = ctx.state;
    if (user) {
      const { id } = ctx.request.body;
      if (!id) return ctx.sendError('0', '参数错误');
      const queryRes = await ImageModel.findById(id);
      if (!queryRes) {
        return ctx.sendError('0', '当前图片不存在');
      }

      const delPath = queryRes.url.match(/\/upload\/\w+\.(jpg|png|webp|jpeg)$/gi)[0];
      const del = path.resolve(__dirname, `../public${delPath}`);
      if(fs.existsSync(del)) {
        fs.unlinkSync(del);
      }
      const result = await ImageModel.deleteOne({ _id: id });
      if (result) {
        ctx.send('1', '删除成功');
      }
    } else {
      return ctx.sendError('-1', '请先登录');
    }
    // deleteall()
    return ctx;
  }
}

module.exports = new ImageManage();


function deleteall(path) {
  var files = [];
  if(fs.existsSync(path)) {
    fs.unlinkSync(curPath);
  }
};
