/*
 * @Content: 基础API
 * @Author: Edwin
 * @Date: 2019-01-24 23:18:55
 * @Last Modified by: Edwin
 * @Last Modified time: 2019-01-27 15:25:40
 */
const Router = require('koa-router')();
const home = require('../control/home');

/**
 * @api {post} / 测试API
 * @apiName test
 * @apiGroup Common
 * @apiSuccessExample Success:
 * {
        "code": 1,
        "data": {
            "message": "欢迎进入xxx系统. 当前时间: Sun, 27 Jan 2019 07:25:23 GMT."
        },
        "msg": "请求成功"
    }
 */
Router.get('', home.welcome)

/**
 * @api {post} /system 获取系统基本信息
 * @apiName system
 * @apiGroup Common
 * @apiSuccessExample Success:
 * {
        "code": 1,
        "data": {
            "version": "0.0.1",
            "sysname": "xxx系统"
        },
        "msg": "请求成功"
    }
 */
Router.get('system', home.system);

module.exports = Router;
