'use strict'

const mongoose = require('mongoose')
const User = require('../Models/User')
consr service = require('../Services')

function singUp(req, res){
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,        
    })

    user.save((err)=> {
        if (err) res.status(500).send({message: "Error al crear el usuario"})
        return res.status(200).send({token: service.createToken(user)})
    })

}

function singIn(req, res) {

}

module.exports = {
    singUp,
    singIn
}