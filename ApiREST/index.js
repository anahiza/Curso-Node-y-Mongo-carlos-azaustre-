'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Product = require('./Models/Product')

const app = express()
const port = process.env.PORT || 3000
const ProductController = require('./Controllers/product')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/api/product", ProductController.getProducts)

app.get("/api/product/:id", ProductController.getProduct)

app.post("/api/product", ProductController.saveProduct)

app.put("/api/product/:id", ProductController.updateProduct)

app.delete("/api/product/:id", ProductController.deleteProduct)

mongoose.connect("mongodb://localhost:27017/shop", (error, res) => {
    if (error) {
        return console.log(`Error al conectar a la db ${error}`)
    }
    console.log("Conexion a db establecida")
    app.listen(port, () => {
        console.log(`Api REST funcionando en http://localhost:${port}`)
    })
})