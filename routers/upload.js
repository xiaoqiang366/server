/*
 * @Content: 文件上传(最大2M)
 * @Author: Edwin
 * @Date: 2019-01-27 15:19:31
 * @Last Modified by: Edwin
 * @Last Modified time: 2019-01-29 20:37:04
 */
const fs = require('fs');
const path = require('path');
const Router = require('koa-router')();
const { imagePath } = require('../config/config');

/**
 * @api {post} /upload 图片上传
 * @apiName upload
 * @apiGroup Common
 * @apiParam (params) {File} file 图片文件
 * @apiSuccessExample Success:
 * {
      "code": 1,
      "data": {
          "path": "http://127.0.0.1:3030/upload/1548574042471.png"
      },
      "msg": "上传成功"
  }
 *
 */
Router.post('/', async (ctx, next) => {
  const { file } = ctx.request.files || {}; // 获取上传文件
  if (!file) return ctx.sendError(-1, '参数错误')
  const reader = fs.createReadStream(file.path); // 创建可读流

  const fileName = `${new Date().getTime()}${path.extname(file.name)}`;
  const resPath = path.resolve(__dirname, `../public/upload/${fileName}`);

  const upStream = fs.createWriteStream(resPath); // 创建可写流
  reader.pipe(upStream); // 可读流通过管道写入可写流
  return ctx.send({
    path: `${imagePath}/upload/${fileName}`
  }, '上传成功')
})

module.exports = Router;
