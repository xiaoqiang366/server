const { db } = require('../schema/config')

const OrderListSchema = require('../schema/orderList')
const orderList = db.model("orderLists", OrderListSchema)

module.exports = orderList