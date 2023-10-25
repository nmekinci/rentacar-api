"use strict"

const router = require('express').Router()

const auth = require('../controllers/auth')
const permissions = require('../middlewares/permissions')


router.post('/login', auth.login)
router.get('/logout', permissions.isLogin,auth.logout)

module.exports = router