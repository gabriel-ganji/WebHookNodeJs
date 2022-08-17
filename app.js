const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const xmlparser = require('express-xml-bodyparser');

app.use(xmlparser());

app.use(bodyParser.urlencoded({ extended: false }));

const rotasApi = require("./routes/routesApi");

app.use("/ever", rotasApi);

module.exports = app;
