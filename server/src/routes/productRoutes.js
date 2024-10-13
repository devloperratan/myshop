const express = require('express');
const { createProduct, getAllProducts } = require('../controller/productController');

const router = express.Router();

router.post('/createProduct', createProduct)
router.get('/getAllProducts',getAllProducts)
router.get('/getProductById')
router.put('/editProduct')
router.delete('/deleteProduct')

module.exports = router