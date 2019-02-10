const {
  Schema
} = require("./config")
const ObjectId = Schema.Types.ObjectId

const OrderListSchema = new Schema({
  menuDetail: {
    type: ObjectId,
    ref: 'orderLists'
  },
  count: Number
}, { versionKey: false })
module.exports = OrderListSchema
