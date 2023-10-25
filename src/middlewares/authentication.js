"use strict";

const jwt = require("jsonwebtoken");


module.exports = (req, res, next) => {
  const auth = req.headers?.authorization;
  const tok = auth ? auth.split(" ")[1] : null;
  req.isLogin = false;
  req.user = null;
  jwt.verify(tok, process.env.KEY,function (err, userData)  {
    console.log(userData);
    if (userData && userData.isActive) {
      req.isLogin = true;
      req.user = userData;
    }
  })
  next()
};
