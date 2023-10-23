"use strict"

// all routes

const router = require('express').Router()

router.use('/users', require('./user'))
router.use('/reservations', require('./reservation'))
router.use('/cars', require('./car'))

module.exports = router