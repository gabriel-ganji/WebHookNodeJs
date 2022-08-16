const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

const rotasApi = require("./routes/routesApi");

app.use("/ever", rotasApi);

module.exports = app;