"use strict";

const jet = require("jsonwebtoken");
const setToken = require("../helpers/setToken");

const User = require("../models/user");

module.exports = {
  login: async (req, res) => {
    /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'Login'
            #swagger.description = 'Login with username and password'
            _swagger.deprecated = true
            _swagger.ignore = true
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    username: 'test',
                    password: '1234'
                }
            }
        */
    const { username, password } = req.body;

    if (username && password) {
      const user = await User.findOne({ username, password });

      if (user) {
        if (user.isActive) {
          res.status(200).send({
            error: !user.isActive,
            token: setToken(user),
            note: "logged in successfully",
          });
        } else {
          res.errorStatusCode = 401;
          throw new error("This account is not active!!");
        }
      } else {
        res.errorStatusCode = 401;
        throw new error("wrong Username or Password ");
      }
    } else {
      res.errorStatusCode = 401;
      throw new error("Enter a valid username and password");
    }
  },
  logout: async (req, res) => {
    /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'Logout'
            #swagger.description = 'No need any doing for logout. You must deleted Bearer Token from your browser.'
        */

    res.status(200).send({
      error: false,
      token: null,
      note: "logged out successfully",
    });
  },
};
