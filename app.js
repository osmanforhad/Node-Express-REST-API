const express = require('express');
const router = require('./src/routes/api');
const app = new express();

//Import Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


//Implement Security Middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});
app.use(limiter);

//route configure 
app.use("/api/v1", router);

//Undefined Route
app.use("*", (request, response) => {
    response.status(404).json({status:"fail", data:"Not Found"});
});

module.exports = app;