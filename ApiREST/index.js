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
    Product.find({}, (err, products)=> {
        if (err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if (!products) return res.status(404).send({message: `El producto no existe`})
        res.status(200).send({products})
    
    })
  
})

app.get("/api/product/:id", (req, res) => {
    console.log("GET/Product/id")
    let pID = req.params.id
    Product.findById(pID, (err, product) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if (!product) return res.status(404).send({message: `El producto no existe`})
        res.status(200).send({product})
    })

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
        res.status(200).send({producto: p})
 
    })
   
})

app.put("/api/product/:id", (req, res) => {

})

app.delete("/api/product/:id", (req, res)=> {
    let pID = req.params.id
    console.log(pID)
    Product.findById(pID, (err, product) => {
        if (err){
            console.log(err)
            res.status(500).send(`Error al borrar el producto ${productId} $err`)
        }
        console.log(product)
        product.remove( err => {
            if (err){
                console.log(err)
                res.status(500).send(`Error al borrar el producto ${productId} ${err}`)
            }
            res.status(200).send("El producto ha sido eliminado")
        })

    })

})

mongoose.connect("mongodb://localhost:27017/shop", (error, res) => {
    if (error) {
        return console.log(`Error al conectar a la db ${error}`)
    }
    console.log("Conexion a db establecida")
    app.listen(port, ()=> {
        console.log(`Api REST funcionando en http://localhost:${port}`)
    })
})