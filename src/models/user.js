"use strict"

const {Schema, model, default: mongoose} = require('mongoose')
const passCrypt = require('../helpers/passwordEncrypt')

const UserSchema = new Schema({
    
    username : {
        type: String,
        trim: true,
        reqired: true,
        unique: true,
    },
    password: {
        type:String,
        trim:true,
        required: true,
        set: (password) => passCrypt(password)
    },
    email:{
        type:String,
        trim:true,
        required: [true, "email required"],
        unique: [true, "this email already registered"],
        validate: [
            (email) => {
                const emailRegexCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                return emailRegexCheck.test(email)
            },
            "email type is incorrect"
        ]
        //! npm i email-validator
        //! var validator = require("email-validator")
        // validate:[validator.validate("test@email.com")]
    },
    reservList: [
        {
            type:Schema.Types.ObjectId,
            ref:'Reservation',
            required:false
        }
    ],
    isActive:{
        type:Boolean,
        default: true
    },
    isStaff:{
        type:Boolean,
        default: false
    },
    isAdmin:{
        type:Boolean,
        default: false
    },


},{collection:'users', timestamps: {createdAt:'createdAt_User', updatedAt:'updatedAt_User'}})

module.exports = model('User', UserSchema)