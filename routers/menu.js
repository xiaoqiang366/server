/*
 * @Content: 菜单管理
 * @Author: Edwin
 * @Date: 2019-01-24 23:44:32
 * @Last Modified by: Edwin
 * @Last Modified time: 2019-01-29 20:56:10
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
 * @api {get} /menu/allList 获取所有菜品
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
                "id": "5c4c210617ae8adc2e2494c8",
                "cid": "5c4c1f34db0db1d9cfad0e7f",
                "name": "红烧牛肉面",
                "desc": "暂无描述",
                "price": "18",
                "updateTime": "2019-01-26T08:57:42.680Z"
            },
            {
                "id": "5c4c212017ae8adc2e2494c9",
                "cid": "5c4c1f34db0db1d9cfad0e7f",
                "name": "青椒肉丝",
                "desc": "暂无描述",
                "price": "18",
                "updateTime": "2019-01-26T08:58:08.562Z"
            }
        ],
        "total": 3
    },
    "msg": "请求成功"
}
 *
 */
Router.get("/allList", Menu.allList);

/**
 * @api {get} /menu/getListByCid?cid=5c4c218017ae8adc2e2494ca 根据cid获取菜品
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
                "id": "5c4c210617ae8adc2e2494c8",
                "cid": "5c4c1f34db0db1d9cfad0e7f",
                "name": "红烧牛肉面",
                "desc": "暂无描述",
                "price": "18",
                "updateTime": "2019-01-26T08:57:42.680Z"
            },
            {
                "id": "5c4c212017ae8adc2e2494c9",
                "cid": "5c4c1f34db0db1d9cfad0e7f",
                "name": "青椒肉丝",
                "desc": "暂无描述",
                "price": "18",
                "updateTime": "2019-01-26T08:58:08.562Z"
            }
        ],
        "total": 3
    },
    "msg": "请求成功"
}
 *
 */
Router.get("/getListByCid", Menu.getListByCid);

/**
 * @api {post} /menu/list 菜品删除
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
 * @apiParam (params) {String} img 图片
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
            "id": "5c4c212017ae8adc2e2494c9",
            "name": "香辣牛肉面1",
            "cid": "5c4c1f34db0db1d9cfad0e7f",
            "price": "198",
            "desc": "暂无描述",
            "img": "/avatar/noodles.jpg",
            "updateTime": "2019-01-26T09:59:45.299Z"
        },
        "msg": "更新成功"
    }
 *
 */
Router.post("/update", Menu.update)

module.exports = Router;
