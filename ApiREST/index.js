'use strict'

const express = require('express')
const bodyParser = require('body-parser')


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
    console.log(req.body)
    res.status(200).send({message: "El producto se ha recibido"})
})

app.put("/api/product/:id", (req, res) => {

})

app.delete("/api/procut/:id", (req, res)=> {

})
app.listen(port, ()=> {
    console.log(`Api REST funcionando en http://localhost:${port}`)
})