/*
 * @Content: 订单管理
 * @Author: zhf
 * @Date: 2019-01-29 23:44:32
 * @Last Modified by: Edwin
 * @Last Modified time: 2019-02-18 22:49:12
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

/**
 * @api {get} /order/clist?pageNum=2&pageSize=2 获取所有菜品
 * @apiName OrderList
 * @apiGroup Order
 * @apiDescription 所有正在进行中订单查询
 * @apiParam (params) {Number} [pageNum = 1]  页数
 * @apiParam (params) {Number} [pageSize = 10] 每页显示条数
 * @apiSuccessExample 成功
 * {
        "code": 1,
        "data": {
            "list": [

            ],
            "totalPage": 4
        },
        "msg": "请求成功"
    }
 *
 */
Router.get("/clist", Order.clist);
/**
 * @api {get} /order/hlist?pageNum=2&pageSize=2 获取所有菜品
 * @apiName OrderList
 * @apiGroup Order
 * @apiDescription 所有历史订单查询
 * @apiParam (params) {Number} [pageNum = 1]  页数
 * @apiParam (params) {Number} [pageSize = 10] 每页显示条数
 * @apiSuccessExample 成功
 * {
        "code": 1,
        "data": {
            "list": [

            ],
            "totalPage": 4
        },
        "msg": "请求成功"
    }
 *
 */
Router.get("/hlist", Order.hlist);


// Router.post("/delete", Order.delete)


Router.post("/update", Order.update)


//
/**
 * @api {post} /order/lists 获取订单列表
 * @apiName OrderLists
 * @apiGroup Order
 * @apiDescription 根据订单号查询订单详情
 * @apiParam (params) {Array} orderNumbers  订单号数组
 * @apiParamExample {json} 请求参数:
 * {
 *   "orderNumbers": [1549935550183001, 1549935696825003]
 * }
 *
 * */
Router.post("/lists", Order.getLists)


module.exports = Router;
