const express = require("express");
const {Router} = require('express');
const userRouter  = Router();
// const app = express();
// function createuserRoutes(app) {



// app.post('user/signup', function(req, res) {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;

// })
// app.post('user/signin', function(req, res) {
//      const email = req.body.email;
//     const password = req.body.password;

// })
// app.post('/user/purchases', function(req, res) {
//     res.json({

//     })
// })
// }

// module.exports = {
//     createuserRoutes: createuserRoutes
// }

userRouter.post('/signup', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

})
userRouter.post('/signin', function(req, res) {
     const email = req.body.email;
    const password = req.body.password;

})
userRouter.post('/purchases', function(req, res) {
    res.json({

    })
})

module.exports = {
    userRouter: userRouter,
}



