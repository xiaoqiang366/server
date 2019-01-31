/*
 * @Content: 订单管理
 * @Author: zhf
 * @Date: 2019-01-29 23:44:32
 * @Last Modified by: zhf
 * @Last Modified time: 2019-01-29 16:10:02
 */
const Router = require('koa-router')();
const Order = require('../control/order');


/**
 * @api {post} /order/add 订单添加(客户端)
 * @apiName orderAdd
 * @apiGroup Order
 * @apiDescription 添加订单
 * @apiParam (params) {String} num 桌号
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
      "errMsg": "当前桌号已存在, 请勿重复添加"
  }
 *
 */
Router.post("/add", Order.add)

/**
 * @api {get} /table/list 桌号查询
 * @apiName tableList
 * @apiGroup Table
 * @apiDescription 所有桌号列表查询
 * @apiSuccessExample 添加成功
 * {
      "code": 1,
      "data": {
          "list": [
              {
                  "id": "5c4be1ba45b939b6a4f557b4",
                  "num": 1,
              },
              {
                  "id": "5c4be1ba45b939b6a4f557b5",
                  "num": 2,
              },
          ],
          "total": 2
      }
  }
 *
 */
Router.get("/clist", Order.currentList);
Router.get("/hlist", Order.historyList);

/**
 * @api {post} /table/delete 桌号删除
 * @apiName tableDelete
 * @apiGroup Table
 * @apiDescription 桌号删除
 * @apiParam (params) {String} id 桌号id
 * @apiSuccessExample 删除成功
 * {
        "code": 1,
        "data": "删除成功",
        "msg": "请求成功"
    }
 *
 * @apiErrorExample 桌号不存在
 * {
        "code": 0,
        "errMsg": "当前桌号不存在"
    }
 */
Router.post("/delete", Order.delete)

/**
 * @api {post} /table/update 桌号修改
 * @apiName tableUpdate
 * @apiGroup Table
 * @apiDescription
 * @apiParam (params) {String} id 桌号id
 * @apiHeaderExample {json} Header:
 * {
 *    "Authorition": "xxxxxxxxxxxx"
 *  }
 *
 * @apiSuccessExample 成功
 * {
      "code": 1,
      "data": {
          "tableId": "5c4be6f9751906b9606218c8"
      }
  }
 * @apiErrorExample {json} 未登录
  {
      "code": -1,
      "errMsg": "请先登录"
  }
* @apiErrorExample {json} 添加失败
  {
      "code": 0,
      "errMsg": "当前桌号已存在"
  }
 *
 */
Router.post("/update", Order.update)

module.exports = Router;
