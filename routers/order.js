/*
 * @Content: 订单管理
 * @Author: zhf
 * @Date: 2019-01-29 23:44:32
 * @Last Modified by: Edwin
 * @Last Modified time: 2019-02-01 12:50:20
 */
const Router = require('koa-router')();
const Order = require('../control/order');


/**
 * @api {post} /order/add 订单添加(客户端)
 * @apiName orderAdd
 * @apiGroup Order
 * @apiDescription 添加订单
 * @apiParamExample {json} 请求参数:
 * {
    "tableNum": "5c507b5cc212780b0f940951",
    "list": [
        {
            "menuItem":"5c50038be7877122a8f2cc5b", // 菜单_id
            "count":2 // 数量
        }
    ],
    "amount":20
}
 * @apiParam (params) {String} tableNum 桌号_id
 * @apiParam (params) {Array} list 点餐列表
 * @apiParam (params) {Number} amount 点餐金额
 *
 * @apiSuccessExample 添加成功
 * {
    "code": 1,
    "data": {
        "orderNum": 3,
        "tableNum": "5c507b5cc212780b0f940951",
        "status": 0,
        "list": [
            {
                "menuItem": "5c50038be7877122a8f2cc5b",
                "count": 2
            }
        ],
        "amount": 20
    },
    "msg": "请求成功"
}
 *
 */
Router.post("/add", Order.add)


// Router.get("/clist", Order.currentList);
// Router.get("/hlist", Order.historyList);


// Router.post("/delete", Order.delete)


Router.post("/update", Order.update)

module.exports = Router;
