"use strict"

//error handler
const winston = require("winston");

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: "combined.log" }),
    ],
  });

module.exports = (err,req,res,next) => {
    logger.error("error",err.message,err)
    return res.status(res?.errorStatusCode || 500).send({
        error: true,
        message: err.message,
        cause: err.cause,
        body:req.body,
        stack: err.stack
    })
}