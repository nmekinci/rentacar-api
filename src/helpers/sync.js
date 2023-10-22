"use strict"

module.exports = async () => {
    return null;

    /* Remove to DB */
    const {mongoose} = require('../config/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('************ DB and All datas DELETED ***************')
}