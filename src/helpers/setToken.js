"use strict"

//token
//npm i jsonwebtoken

const jwt = require('jsonwebtoken')

module.exports = (userData) => {
    if (userData) {
    const data = {
        userInfos :  {_id: userData._id, password: userData.password, isActive:userData.isActive, isStaff:userData.isStaff,isAdmin:userData.isAdmin},
        time: '1d',

    }
    return {token : jwt.sign(data.userInfos, process.env.KEY, {expiresIn: data.time})}}
    else {
        return {token : null}
    }
}
