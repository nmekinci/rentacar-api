"use strict"


const router = require('express').Router()

const car = require('../controllers/car')

const permissions = require('../middlewares/permissions')
router.use(permissions.isLogin)

router.route('/')
    .get(car.list)
    .post(car.create)

router.route('/:id')
    .get(car.read)
    .put(car.update)
    .patch(car.update)
    .delete(car.delete)

module.exports = router