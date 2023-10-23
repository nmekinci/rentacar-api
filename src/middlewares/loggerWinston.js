"use strict";

//logger with winston
//npm i winston
//npm i winston-mongodb

const winston = require("winston");

// sets for logging with winston 
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

module.exports = (req,res,next) => {
    // logging inside the middleware
  logger.info(`${req.method} ${req.url}`);
  next()
}