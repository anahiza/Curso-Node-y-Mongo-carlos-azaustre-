'use strict'

const mongoose = require('mongoose')
const User = require('../Models/User')
const service = require('../Services')

function singUp(req, res){
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,        
    })

    user.save((err)=> {
        if (err) res.status(500).send({message: `Error al crear el usuario ${err}`})
        return res.status(200).send({token: service.createToken(user)})
    })

}

function singIn(req, res) {
    User.find({email: req.body.email}, (err, user) => {
        if (err) return res.status(500).send({message: err})
        if (!user) return res.status(404).send({message: "Usuario no existe"})
        req.user = user
        res.status(200).send({
            message: "Te has logueado correctamente",
            token: service.createToken(user)
        })
    })

}

module.exports = {
    singUp,
    singIn
}