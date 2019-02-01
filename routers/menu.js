/*
 * @Content: 菜单管理
 * @Author: Edwin
 * @Date: 2019-01-24 23:44:32
 * @Last Modified by: Edwin
 * @Last Modified time: 2019-02-01 19:39:54
 */
const Router = require('koa-router')();
const Menu = require('../control/menu');


/**
 * @api {post} /menu/add 菜品添加
 * @apiName menuAdd
 * @apiGroup Menu
 * @apiDescription 添加菜品
 * @apiParam (params) {String} name 菜品名称
 * @apiParam (params) {String} cid 菜品分类id
 * @apiParam (params) {String} price 价格
 * @apiParam (params) {String} [desc='暂无描述'] 分类描述
 * @apiParam (params) {String} [img='/img/default.jpg'] 菜品图片
 * @apiHeaderExample {json} Header:
 * {
 *    "Authorition": "xxxxxxxxxxxx"
 *  }
 *
 * @apiSuccessExample 添加成功
 * {
      "code": 1,
      "data": {
          "categoryId": "5c4be6f9751906b9606218c8"
      }
  }
 * @apiErrorExample {json} 未登录
  {
      "code": -1,
      "errMsg": "请先登录"
  }
* @apiErrorExample {json} 重复添加
  {
      "code": 0,
      "errMsg": "当前分类已存在, 请勿重复添加"
  }
 */
Router.post("/add", Menu.add)

/**
 * @api {get} /menu/allList?pageNum=2&pageSize=2 获取所有菜品
 * @apiName menuList
 * @apiGroup Menu
 * @apiDescription 所有菜品查询
 * @apiParam (params) {Number} [pageNum = 1]  页数
 * @apiParam (params) {Number} [pageSize = 10] 每页显示条数
 * @apiSuccessExample 成功
 * {
        "code": 1,
        "data": {
            "list": [
                {
                    "_id": "5c504afc94bcc35c1b9fe838",
                    "name": "清炒土豆丝",
                    "cid": "5c4faaa8a1068c20dd01feb7",
                    "price": "60",
                    "desc": "暂无描述",
                    "img": "http://127.0.0.1:3030/img/tudou.jpg",
                    "updateTime": "2019-01-29T12:45:48.847Z"
                },
                {
                    "_id": "5c504b4c94bcc35c1b9fe839",
                    "name": "辣的跳",
                    "cid": "5c4faaa8a1068c20dd01feb7",
                    "price": "30",
                    "desc": "特别辣",
                    "img": "http://127.0.0.1:3030/img/lalala.jpg",
                    "updateTime": "2019-01-29T12:47:08.459Z"
                }
            ],
            "totalPage": 4
        },
        "msg": "请求成功"
    }
 *
 */
Router.get("/allList", Menu.allList);

/**
 * @api {get} /menu/getListByCid?cid=5c4faaa8a1068c20dd01feb7&pageNum=1&pageSize=2 根据cid获取菜品
 * @apiName getListByCid
 * @apiGroup Menu
 * @apiDescription 所有菜品查询
 * @apiParam (params) {Number} [pageNum = 1]  页数
 * @apiParam (params) {Number} [pageSize = 10] 每页显示条数
 * @apiSuccessExample 成功
 * {
        "code": 1,
        "data": {
            "list": [
                {
                    "_id": "5c504ab394bcc35c1b9fe836",
                    "name": "香辣牛肉面1===",
                    "cid": "5c4faaa8a1068c20dd01feb7",
                    "price": "198",
                    "desc": "暂无描述",
                    "img": "http://127.0.0.1:3030/img/default.jpg",
                    "updateTime": "2019-01-29T13:26:14.224Z"
                },
                {
                    "_id": "5c504afc94bcc35c1b9fe838",
                    "name": "清炒土豆丝",
                    "cid": "5c4faaa8a1068c20dd01feb7",
                    "price": "60",
                    "desc": "暂无描述",
                    "img": "http://127.0.0.1:3030/img/tudou.jpg",
                    "updateTime": "2019-01-29T12:45:48.847Z"
                }
            ],
            "totalPage": 3
        },
        "msg": "请求成功"
    }
 *
 */
Router.get("/getListByCid", Menu.getListByCid);

/**
 * @api {post} /menu/delete 菜品删除
 * @apiName MenuDelete
 * @apiGroup Menu
 * @apiDescription 菜品删除
 * @apiParam (params) {String} id 菜品id
 * @apiSuccessExample 删除成功
 * {
        "code": 1,
        "data": "删除成功",
        "msg": "请求成功"
    }
 */
Router.post("/delete", Menu.delete)

/**
 * @api {post} /menu/update 菜品修改
 * @apiName menuUpdate
 * @apiGroup Menu
 * @apiParam (params) {String} cid 分类id
 * @apiParam (params) {String} id 菜品id
 * @apiParam (params) {String} name 名称
 * @apiParam (params) {String} desc 描述
 * @apiParam (params) {String} price 价格
 * @apiParam (params) {String} [img = '/img/default.jpg'] 图片
 *
 * @apiHeaderExample {json} Header:
 * {
 *    "Authorition": "xxxxxxxxxxxx"
 *  }
 *
 * @apiSuccessExample 成功
 * {
        "code": 1,
        "data": {
            "id": "5c504ab394bcc35c1b9fe836",
            "name": "香辣牛肉面1===",
            "cid": "5c4faaa8a1068c20dd01feb7",
            "price": "198",
            "desc": "暂无描述",
            "img": "http://127.0.0.1:3030/img/default.jpg",
            "updateTime": "2019-01-29T15:25:43.175Z"
        },
        "msg": "更新成功"
    }
 *
 */
Router.post("/update", Menu.update)

module.exports = Router;
