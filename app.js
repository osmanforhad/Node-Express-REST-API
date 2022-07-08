const express = require('express');
const router = require('./src/routes/api');

const app = new express();

app.use("/api/v1", router);

//Undefined Route
app.use("*", (request, response) => {
    response.status(404).json({status:"fail", data:"Not Found"});
});

module.exports = app;