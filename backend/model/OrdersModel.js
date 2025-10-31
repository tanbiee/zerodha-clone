const mongoose = require("mongoose");

const {OrdersSchema} = require('../schemas/OrdersSchema');
// Register the model using mongoose.model. Specify the collection name explicitly
// so documents are written to the `ordershistory` collection.
const OrdersModel = mongoose.model("Orders", OrdersSchema, "ordershistory");

module.exports = {OrdersModel};