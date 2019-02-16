/*
 * @Content: 用户模块
 * @Author: Edwin
 * @Date: 2019-01-24 23:18:55
 * @Last Modified by: Edwin
 * @Last Modified time: 2019-02-16 20:54:01
 */
const Router = require('koa-router')();
const user = require('../control/user');

/**
 * @api {post} /user/reg 用户注册
 * @apiName reg
 * @apiGroup User
 * @apiParam (params) {String} username 用户名
 * @apiParam (params) {String} password 密码
 * @apiSuccessExample Success-Response:
 * {
        "code": 1,
        "data": "注册成功"
    }
 *
 * @apiErrorExample {json} Error-Response:
 * {
        "code": 0,
        "data": "注册失败"
    }
 */
Router.post('/reg', user.reg)
/**
 * @api {post} /user/update 用户修改
 * @apiName update
 * @apiGroup User
 * @apiParam (params) {String} username 用户名
 * @apiParam (params) {String} password 用户密码
 * @apiParam (params) {String} avatar 用户头像URL
 * @apiParam (params) {String} id 被修改人id
 * @apiSuccessExample Success-Response:
 * {
    "code": 1,
    "data": "修改成功"
    }
 *
 * @apiErrorExample {json} Error-Response:
 * {
    code: 0,
    data: '',
    errMsg: '没有权限!'
    }
 */
Router.post('/update', user.update)
/**
 * @api {post} /user/del 用户删除
 * @apiName del
 * @apiGroup User
 * @apiParam (params) {String} userId 用户id
 * @apiSuccessExample Success-Response:
 * {
        code: 1,
        data: '删除成功',
    }
 *
 * @apiErrorExample {json} Error-Response:
 * {
        code: 0,
        data: '',
        errMsg: '没有权限'
    }
 */
Router.post('/del', user.del)
/**
 * @api {get} /user/inquire 所有用户信息查询
 * @apiName inquire
 * @apiGroup User
 * @apiParam (params) {number} pageNum 查询起始页
 * @apiParam (params) {number} pageSize 显示条数
 * @apiDescription 用户信息查询需要管理员权限
 * @apiHeaderExample {json} Header-Example:
 * {
 *    "Authorition": "xxxxxxxxxxxx"
 *  }
 * @apiSuccessExample Success-Response:
 * {
    "code": 1,
    "data": {
        "userLists": [
            {
                "role": "1",
                "avatar": "/avatar/default.jpg",
                "_id": "5c4c097bb34a92965477502c",
                "username": "qqq",
                "password": "b387c9b0483f7daa982a95f72d685fe33fab29d538887a7180957ccedd725d13"
            },
            {
                "role": "1",
                "avatar": "/avatar/default.jpg",
                "_id": "5c4c0981b34a92965477502d",
                "username": "www",
                "password": "d46cc2563f4edb997cc2c82971d8190ec176e1c7440a2903054a87e2bea1974a"
            }
        ],
        "totalPage": 7
    }
}
 */

Router.get('/inquire', user.inquire)


/**
 * @api {post} /user/login 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam (params) {String} username 用户名
 * @apiParam (params) {String} password 密码
 * @apiSuccessExample Success-Response:
 * {
      "code": 1,
      "data": {
          "role": "0",
          "avatar": "/avatar/default.jpg",
          "username": "admin",
          "id": "5c4445b4975a0b56e0e462dc",
          "token": "xxx"
      }
  }
 *
 * @apiErrorExample {json} Error-Response:
 * {
 *    code: 0,
 *    errMsg: '登录失败'
 * }
 */
Router.post('/login', user.login)

Router.get('/upload', user.upload)

/**
 * @api {get} /user/info 用户信息查询
 * @apiName userinfo
 * @apiGroup User
 * @apiDescription 用户信息查询需要用户登录
 * @apiHeaderExample {json} Header-Example:
 * {
 *    "Authorition": "xxxxxxxxxxxx"
 *  }
 * @apiSuccessExample Success-Response:
 * {
        "code": 1,
        "data": {
            "role": "0",
            "avatar": "/avatar/default.jpg",
            "username": "xiaoqiang",
            "id": "5c4b2e2bfae6477ad8cfb41e"
        }
    }
 */
Router.get('/info', user.getinfo)


module.exports = Router;
