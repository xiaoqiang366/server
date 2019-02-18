/*
 * @Content: 订单管理
 * @Author: zhf
 * @Date: 2019-01-29 23:44:32
 * @Last Modified by: Edwin
 * @Last Modified time: 2019-02-18 22:53:19
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
 * @apiParamExample {json} 请求参数
 * {
 *   "orderNumbers": [1549935550183001, 1549935696825003]
 * }
 *
 * @apiSuccessExample 请求成功
 * {
        "code": 1,
        "data": [
            {
                "status": 0,
                "list": [
                    {
                        "count": 4,
                        "menuDetail": {
                            "_id": "5c552cedd4df7a6d4fa647c8",
                            "name": "玉米排骨",
                            "cid": "5c4ea70c79b6e11c20038549",
                            "price": "22",
                            "desc": "123",
                            "img": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3588928876,2268038028&fm=85&app=57&f=JPEG?w=121&h=75&s=0BA867874E5A55CA560A5A680300F078",
                            "updateTime": "2019-02-02T05:38:53.186Z"
                        }
                    },
                    {
                        "count": 3,
                        "menuDetail": {
                            "_id": "5c553a44d4df7a6d4fa647cc",
                            "name": "哈哈哈",
                            "cid": "5c4e994879b6e11c20038544",
                            "price": "11",
                            "desc": "22",
                            "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549099410484&di=6964b067f91767e91af29004cb7cdab6&imgtype=0&src=http%3A%2F%2Fwww.lovehhy.net%2Flib%2Fimg%2F3201539%2F754492_1213314363.jpg",
                            "updateTime": "2019-02-02T06:35:48.951Z"
                        }
                    }
                ],
                "remarks": "",
                "_id": "5c6223be8c91ee206c66445f",
                "orderNum": 1549935550183001,
                "tableNum": "5c507b5cc212780b0f940951",
                "amount": 121,
                "realAmount": 121,
                "created": "2019-02-12T01:39:10.194Z",
                "updatedAt": "2019-02-12T01:39:10.194Z"
            },
            {
                "status": 2,
                "list": [
                    {
                        "count": 1,
                        "menuDetail": {
                            "_id": "5c50038be7877122a8f2cc5b",
                            "name": "红烧肉",
                            "cid": "5c4e9b2079b6e11c20038545",
                            "price": "25.00",
                            "desc": "好吃",
                            "img": "http://116.62.147.91:3030/upload/d615081ef9c27de2a14a003e8a455212.jpg",
                            "updateTime": "2019-02-01T11:51:36.566Z"
                        }
                    },
                    {
                        "count": 1,
                        "menuDetail": {
                            "_id": "5c51c5b409bf6513b2d11c17",
                            "name": "🐜蚂蚁上树",
                            "cid": "5c4e9b2079b6e11c20038545",
                            "price": "18.00",
                            "desc": "暂无描述",
                            "img": "http://116.62.147.91:3030/upload/1548867556106.png",
                            "updateTime": "2019-01-30T16:59:17.513Z"
                        }
                    }
                ],
                "remarks": "",
                "_id": "5c6224508c91ee206c664464",
                "orderNum": 1549935696825003,
                "tableNum": "5c507b5cc212780b0f940951",
                "amount": 43,
                "realAmount": 43,
                "created": "2019-02-12T01:41:36.831Z",
                "updatedAt": "2019-02-18T13:27:01.493Z"
            }
        ],
        "msg": "请求成功"
    }
 *
 * */
Router.post("/lists", Order.getLists)


module.exports = Router;
