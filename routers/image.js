const md5 = require('md5');
const image = require('../control/image');

/*
 * @Content: 文件上传(最大2M)
 * @Author: Edwin
 * @Date: 2019-01-27 15:19:31
 * @Last Modified by: Edwin
 * @Last Modified time: 2019-02-01 17:26:53
 */
const fs = require('fs');
const path = require('path');
const Router = require('koa-router')();


/**
 * @api {post} /image/upload 图片上传
 * @apiName upload
 * @apiGroup Image
 * @apiParam (params) {File} file 图片上传
 * @apiParam (params) {String} [group = 'default'] 图片分组名称  可选项:
 *  + default -> 默认分组
 *  + menu -> 菜品图片
 *  + avatar -> 用户头像
 * @apiParam (params) {String} [name = ''] 图片名称或描述
 * @apiSuccessExample Success:
 * {
    "code": 1,
    "data": {
        "url": "http://116.62.147.91:3030/upload/4477231a362fc585d9a2e2ce0e04314b.jpg",
        "group": "default",
        "name": "用户头像"
    },
    "msg": "上传成功"
}
 *
 */
Router.post('/upload', async (ctx, next) => {
  const { file } = ctx.request.files || {}; // 获取上传文件
  const { group = 'default', name = '' } = ctx.request.body; // 获取上传文件
  if (!file) return ctx.sendError(-1, '参数错误');

  if (!checkGroupName(group)) return ctx.sendError(-1, '分组名称错误');

  const reader = fs.createReadStream(file.path); // 创建可读流
  const extname = path.extname(file.name);
  if (!imgExtname(extname)) {
    return ctx.sendError('0', '文件格式错误');
  }

  const fileName = `${md5(file.name + (new Date().getTime()))}${extname}`;
  const resPath = path.resolve(__dirname, `../public/upload/${fileName}`);

  const upStream = fs.createWriteStream(resPath); // 创建可写流
  reader.pipe(upStream); // 可读流通过管道写入可写流

  return await image.upload(ctx, {
    url: `/upload/${fileName}`,
    group,
    name
  });
  // return ctx.send({
  //   path: `${imagePath}/upload/${fileName}`
  // }, '上传成功')
})


/**
 * @api {get} /image/query?group=default&pageNum=1&pageSize=10 图片分组查询
 * @apiName query
 * @apiGroup Image
 * @apiParam (params) {String} group = 'default' 图片分组名称
 * @apiParam (params) {Number} [pageNum = 1]  页数
 * @apiParam (params) {Number} [pageSize = 10] 每页显示条数
 * @apiSuccessExample Success:
 * {
    "code": 1,
    "data": {
        "list": [
            {
                "id": "5c540a7baa7eaa1cc2e49b03",
                "url": "http://116.62.147.91:3030/upload/195a03f8ebc44f915db6227a53c1654b.png",
                "name": "默认",
                "group": "default",
                "createtime": "2019-02-01T08:59:39.123Z"
            }
        ],
        "totalCount": 1
    },
    "msg": "查询成功"
}
 */
Router.get('/query', image.query)


/**
 * @api {post} /image/delete 图片删除
 * @apiName query
 * @apiGroup Image
 * @apiParam (params) {String} id 图片id
 * @apiSuccessExample Success:
 * {
    "code": 1,
    "data": "1",
    "msg": "删除成功"
}
 */
Router.post('/delete', image.delete)

module.exports = Router;


// 图片后缀缩写
function imgExtname(path) {
  let isFit = false;
  switch (path) {
    case '.jpg':
    case '.jpeg':
    case '.png':
    case '.gif':
    case '.webp':
      isFit = true;
      break;
    default:
      isFit = true;
      break;
  }
  return isFit;
}

// 图片分组校验
function checkGroupName(name) {
  return name === 'default' || name === 'menu' || name === 'avatar';
}