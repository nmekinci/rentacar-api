"use strict"

// password encrypt

const crypto = require('node:crypto'),
keycode = process.env.SECRET_KEY,
loopCount = 8000,
charCount = 32,
encType = 'sha512'

module.exports = (password) => {
    return crypto.pbkdf2Sync(password,keycode,loopCount,charCount,encType).toString('hex')
}