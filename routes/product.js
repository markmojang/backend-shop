const express = require('express');
const router = express.Router();
const {Product} = require("../model/product");

router.get('/', (req, res) => {
    res.send("Hello World!");
})

router.post('/', (req, res) => {
    console.log(req.body.message);
    console.log(req.body.name);
    res.send(req.body.message+" "+req.body.name);
})

router.get("/product", async (req, res) => {
    const products = await Product.find()
    res.send(products);
})

router.post("/product", async (req,res) => {
    let product = new Product({
        name : req.body.name,
        price : req.body.price,
        detail : req.body.detail,
        image : req.body.image,
    });
    product = await product.save();
    res.send(product);
});

router.put("/product/:id", async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name : req.body.name,
            price : req.body.price,
            detail : req.body.detail,
            image : req.body.image,
        },
        { new: true}
    );
    res.send(product)
    console.log("Updated product")
});

router.delete("/product/:id", async (req,res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.send("Success")
})

module.exports = router;