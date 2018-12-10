'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Product = require('./Models/Product')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/api/product", (req, res) => {
    res.send(200, {products: []})
})

app.get("/api/product/:id", (req, res) => {

})

app.post("/api/product", (req, res) => {
    console.log('POST/Product')
    console.log(req.body)
    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description
    
    product.save((err, p) => {
        if (err){
            res.status(500).send(`Error al guardar en db ${err}`)
        }
        res.status(200).send({product: p})
 
    })
   
})

app.put("/api/product/:id", (req, res) => {

})

app.delete("/api/procut/:id", (req, res)=> {

})

mongoose.connect("mongodb://localhost:27017/shop", (error, res) => {
    if (error) 
        return console.log(`Error al conectar a la db ${error}`)
    console.log("Conexion a db establecida")
    app.listen(port, ()=> {
    console.log(`Api REST funcionando en http://localhost:${port}`)
})
})