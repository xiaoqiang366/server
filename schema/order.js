const {
  Schema
} = require("./config")
const ObjectId = Schema.Types.ObjectId
const ChildrenSchema = new Schema({
  menuItem: {
    type: ObjectId,
    ref: 'menus'
  }, // 点餐项
  count: Number // 数量
})
const OrderSchema = new Schema({
  orderNum: Number, // 订单号
  tableNum: { type: ObjectId, ref: "tables" }, // 桌号
  status: { type: Number, default: 0 }, // 订单状态
  list: [{
    menuItem: {
      type: ObjectId,
      ref: 'menus'
    }, // 点餐项
    count: Number // 数量
  }], // 顾客点单列表
  amount: Number, // 订单金额
  realAmount: Number, // 实际结账金额
  remarks: { type: String, default: '' } // 备注
}, { versionKey: false, timestamps: { createdAt: "created" } })
module.exports = OrderSchema
