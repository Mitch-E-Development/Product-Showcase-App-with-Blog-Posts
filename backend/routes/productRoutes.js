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

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// route for creating a new product
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