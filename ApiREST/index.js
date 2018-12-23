'use strict'

const mongoose = require('mongoose')
const Product = require('./Models/Product')
const app = require('./app')
const config = require('./config')
const port = process.env.PORT || 3000


mongoose.connect(config.db, (error, res) => {
    if (error) {
        return console.log(`Error al conectar a la db ${error}`)
    }
    console.log("Conexion a db establecida")
    app.listen(config.port, () => {
        console.log(`Api REST funcionando en ${config.url}:${config.port}`)
    })
})