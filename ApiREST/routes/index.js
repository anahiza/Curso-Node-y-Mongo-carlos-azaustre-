'use strict'
const express = require('express')
const api = express.Router()
const auth = require('../Middlewares/auth')
const ProductController = require('../Controllers/product')

api.get("/product", ProductController.getProducts)
api.get("/product/:id", ProductController.getProduct)
api.post("/product", ProductController.saveProduct)
api.put("/product/:id", ProductController.updateProduct)
api.delete("/product/:id", ProductController.deleteProduct)
api.get("/private", auth.isAuth, function(req,res){
    res.status(200).send({message: "Tienes acceso"})
})

module.exports = api