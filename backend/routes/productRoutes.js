const express = require('express');
const {getProduct, getProducts, getFeatureProduct, createProduct, deleteProduct} = require('../controllers/productControllers')

const router = express.Router();

// route for getting all products
router.get('/products', getProducts);

// route for getting single product product
router.get('/products/:id', getProduct);

// // Route for getting the feature product
router.get('/featured', getFeatureProduct);

// route for creating a new product
router.post('/products', createProduct);

// route for deleting a product
router.delete('/products/:id', deleteProduct);

module.exports = router;