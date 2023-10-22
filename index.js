"use strict"
// Rent A Car API

// mkdir logs
// npm init -y
// npm i express dotenv mongoose express-async-errors
// npm i jsonwebtoken morgan

const express = require('express')
const app = express()

// Modules

require('dotenv').config()
const PORT = process.env?.PORT || 8000

require('express-async-errors')

//configurations

const {dbConnection} = require('./src/config/dbConnection')
dbConnection()

//Middlewares

app.use(express.json())

app.use(require('./src/middlewares/findSearchSortPage'))


//homepath
app.all('/', (req,res) => {
    res.send({
        error:false,
        message: 'Rent A Car API',
        user: req.user
    })
})
//server 
app.listen(PORT, ()=> console.log('http://127.0.0.1:' + PORT) )