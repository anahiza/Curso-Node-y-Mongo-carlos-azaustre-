'use strict'
const express = require('express')
const api = express.Router()
const auth = require('../Middlewares/auth')
const ProductController = require('../Controllers/product')
const UserController = require('../Controllers/User')

api.get("/product", ProductController.getProducts)
api.get("/product/:id", ProductController.getProduct)
api.post("/product", ProductController.saveProduct)
api.put("/product/:id", ProductController.updateProduct)
api.delete("/product/:id", ProductController.deleteProduct)
api.get("/private", auth, function(req,res){
    res.status(200).send({message: "Tienes acceso"})
})
api.post('/singup', UserController.singUp)
api.post('/singin', UserController.singIn)

module.exports = api