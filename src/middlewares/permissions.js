"use strict"

// module.exports = {
//     isLogin: (req,res,next) => {
//         req.user ? next() : (res.errorStatusCode = 403, throw new Error('NoPermission: You must login'));
//     },
//     isStaff : (req,res,next) => {
//         req.user.isStaff ? next() : (res.errorStatusCode = 403, throw new Error('NoPermission: You must be a staff'));
//     },
//     isAdmin : (req,res,next) => {
//         req.user.isAdmin ? next() : (res.errorStatusCode = 403, throw new Error('NoPermission: You must be an admin'));
//     }


module.exports = {
    isLogin: (req,res,next) => {
        if(req.user){ next()}else {res.errorStatusCode = 403
             throw new Error('NoPermission: You must login')}
    },
    isStaff : (req,res,next) => {
       if (req.user.isStaff) { next()} else {res.errorStatusCode = 403
         throw new Error('NoPermission: You must be a staff')}
    },
    isAdmin : (req,res,next) => {
        if (req.user.isAdmin) { next()} else {res.errorStatusCode = 403
             throw new Error('NoPermission: You must be an admin')}
    }
}