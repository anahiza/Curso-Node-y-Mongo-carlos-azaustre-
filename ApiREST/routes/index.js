'use strict'
const express = require('express')
const api = express.Router()
const ProductController = require('../Controllers/product')

api.get("/product", ProductController.getProducts)
api.get("/product/:id", ProductController.getProduct)
api.post("/product", ProductController.saveProduct)
api.put("/product/:id", ProductController.updateProduct)
api.delete("/product/:id", ProductController.deleteProduct)

module.exports = api