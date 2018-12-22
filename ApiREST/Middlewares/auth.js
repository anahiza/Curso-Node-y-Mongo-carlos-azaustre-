'use strict'

const service = require('../Services')

function isAuth( req, res, next){
    if (!req.headers.authorization){
        return res.status(403).send({message: "No tienes autorizacion"})
    }

    const token = req.headers.authorization.split(" ")[1]
    const payload = service.decodeToken(token)
        .then(response => {
            req.user = response
        })
        .catch()
   
}

module.exports = isAuth