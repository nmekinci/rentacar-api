"use strict"

//token
//npm i jsonwebtoken

const jwt = require('jsonwebtoken')

module.exports = (userData){
    const data = {
        userIdPass : {_id: userData._id, password: userData.password},
        time: '1d',

    }
    return {token : jwt.sign(data.userIdPass, process.env.KEY, {expiresIn: data.time})}
}
