"use strict"

const {Schema, model} = require('mongoose')

const ReservationSchema = new Schema({
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    carId:{
        type: Schema.Types.ObjectId,
        ref: 'Car',
        required: true,
    },
    startDate:{
        type:Date,
        required: true,
        // default: new Date()
    },
    endDate:{
        type:Date,
        required: true,
    },
    totalPrice: {
        type: Number,
        default: 0
    }
},{collection: 'reservations', timestamps:true})

module.exports = model('Reservation', ReservationSchema)