"use strict"

//logger with winston
//npm i winston

const winston = require('winston');

// Winston ile loglama ayarları
module.exports = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});