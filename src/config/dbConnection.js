"use strict"

const mongoose = require('mongoose')

const dbConnection = () => {
    mongoose.connect(process.env.MONGODB)
        .then( () => console.log('---  rentacarAPI CONNECTED  ---'))
        .catch( (err) => console.log('**  Connetion Problem DB  **',err))
}

module.exports = {
    dbConnection,
    mongoose
}