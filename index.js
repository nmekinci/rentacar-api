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
//auth
app.use(require('./src/middlewares/authentication'))

//getmodellist
app.use(require('./src/middlewares/findSearchSortPage'))
//logger
app.use(require('./src/middlewares/logger'))
//secondary log with winston
//npm i winston
app.use(require('./src/middlewares/loggerWinston'))

    


//homepath
app.all('/', (req,res) => {
    res.send({
        error:false,
        message: 'Rent A Car API',
        user: req.user
    })
})
//routes
// app.use('/users', require('./src/routes/user'))
// app.use('/reservations', require('./src/routes/reservation'))
// app.use('/cars', require('./src/routes/car'))
app.use(require('./src/routes/index'))

//error handler
app.use(require('./src/middlewares/errorHandler'))
//server 
app.listen(PORT, ()=> console.log('http://127.0.0.1:' + PORT) )

// require('./src/helpers/sync')()