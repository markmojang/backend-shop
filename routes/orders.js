const express = require("express");
const router = express.Router();
const { Order } = require("../model/order");

//get all order
router.get("/order", async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

//Create order
router.post("/order", async (req, res) => {
  let order = new Order({
    name: req.body.name,
    address: req.body.address,
    cart: req.body.cart,
    total: req.body.total,
  });
  order = await order.save();
  res.send(order);
});

module.exports = router;