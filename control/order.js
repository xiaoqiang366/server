const OrderModel = require("../models/order");
let orderNum = 1
class Order {
    // 顾客端新增订单
    async add(ctx) {
        const {
            tableNum,
            list,
            amount
        } = ctx.request.body;
        if (list.length === 0 || !tableNum) return ctx.sendError(-1, '参数错误');
        const model = new OrderModel({
            orderNum,
            tableNum,
            list,
            amount,
            realAmount: amount
        });
        if (orderNum <= 100) {
            orderNum++
        } else {
            orderNum = 1
        }
        const result = await model.save();
        if (result) {
            // socket推送后台管理
            io.emit('NEW_ORDER', result)
            let status = result.status
            ctx.send({
                orderNum,
                tableNum,
                status,
                list,
                amount
            });
        } else {
            ctx.sendError(0, '点单失败')
        }
    }
    // 后台管理更新订单状态
    async update(ctx) {
        const {
            orderId, // 订单id
            status // 订单状态
        } = ctx.request.body;
        await OrderModel.updateOne({
            _id: orderId
        }, {
                $set: {
                    status
                }
            }, (err, res) => {
                if (err) {
                    ctx.sendError(0, '更新失败')
                } else {
                    // 向指定顾客推送soket,更新订单状态
                    ctx.send('操作成功')
                }
            })
    }
    // 后台管理获取未完成的订单列表
    async clist(ctx) {
        let {
            pageNum = 1, pageSize = 10
        } = ctx.query;
        pageNum--;
        pageNum = parseInt(pageNum)
        pageSize = parseInt(pageSize)
        const maxNum = await OrderModel.estimatedDocumentCount((err, num) =>
            err ? console.log(err) : num
        )
        const result = await OrderModel.find({ status: { $lt: 5 } }).populate({
            path: 'tableNum menuItem',
            select: '_id num name price'
        }).skip(pageNum * pageSize)
            .limit(pageSize) // mongoose 用于连表查询
        ctx.send({
            list: result,
            totalPage: maxNum
        })
    }
    // 后台管理获取已完成的历史订单列表
    async hlist(ctx) {
        let {
            pageNum = 1, pageSize = 10
        } = ctx.query;
        pageNum--;
        pageNum = parseInt(pageNum)
        pageSize = parseInt(pageSize)
        const maxNum = await OrderModel.estimatedDocumentCount((err, num) =>
            err ? console.log(err) : num
        )
        const result = await OrderModel.find({ status: { $eq: 5 } }).populate({
            path: 'tableNum',
            select: '_id num'
        }).skip(pageNum * pageSize)
            .limit(pageSize) // mongoose 用于连表查询
        ctx.send({
            list: result,
            totalPage: maxNum
        })

    }
    // 后台管理删除订单
    async delete(ctx) {

    }

}

module.exports = new Order();
