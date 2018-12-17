'use strict'
const Product = require('../Models/Product')
const mongoose = require('mongoose')

function getProduct(req, res){
    let pID = req.params.id
    Product.findById(pID, (err, product) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if (!product) return res.status(404).send({message: `El producto no existe`})
        res.status(200).send({product})
    })
}

function saveProduct(req, res) {
       
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
}
function getProducts (req, res) {
    Product.find({}, (err, products)=> {
        if (err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if (!products) return res.status(404).send({message: `El producto no existe`})
        res.status(200).send({products})
    
    })
}

function updateProduct(req, res){
    let productId = req.params.id  
    let update = req.body    
    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) {
            res.status(500).send({ message: `Error al actualizar el producto ${err}` })
        }
        console.log(productUpdated)
        res.status(200).send({ product: productUpdated })
    })

}

function deleteProduct(req, res){
    let pID = req.params.id
    Product.findById(pID, (err, product) => {
        if (err) {    
            res.status(500).send(`Error al borrar el producto ${productId} ${err}`)
        }
        product.remove((err) => {
            if (err){
                console.log(err)
                res.status(500).send(`Error al borrar el producto ${productId} ${err}`)
            }
            res.status(200).send("El producto ha sido eliminado")
        })

    })
}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct
}