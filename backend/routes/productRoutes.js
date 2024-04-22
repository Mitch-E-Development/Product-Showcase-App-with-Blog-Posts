const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

router.get('/products', async (req,res) => {
    try{
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get('/products/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id)
        res.json(product)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// route for creating a new post
router.post('/products', async (req, res) => {
    try{
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;