const express = require("express");
// const app = express();
const {Router}  = require("express");
const courseRouter = Router();

// function createCourseRoutes(app) {
// app.post("/course/purchase", function(req, res) {
//     res.json({

//     })
// })
// app.get('/courses', function(req, res) {
//     res.json({

//     })
// })
// }

// module.exports  = {
//     createCourseRoutes: createCourseRoutes,
// }

courseRouter.post("/purchase", function(req, res) {
    res.json({

    })
})
courseRouter.get('/preview', function(req, res) {
    res.json({
     msg: "preview all courses"
    })
})
module.exports = {
    courseRouter: courseRouter,
}
