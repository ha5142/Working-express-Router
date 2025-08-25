const jwt = require("jsonwebtoken");
const express = require("express");
const {Router} = require('express');
const {userRouter} = require("./routes/user");
const {courseRouter}  = require('./routes/course');
const {adminRouter} = require("./routes/admin");
// const {auth, JWT_SECRET} = require('./auth');
// const {createUserRoutes}  = require('./routes/user');
// const {createCourseRoutes} = require('./routes/course');

const app = express();
app.use('/api/v1/user', userRouter);  // v1 is my current version of my application
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);

// createUserRoutes(app);
// createCourseRoutes(app);

app.listen(3000);
