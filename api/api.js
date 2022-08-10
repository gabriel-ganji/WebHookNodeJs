//initial config
const express = require("express");
const app = express();
// const session = require("express-session");
const fileupload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
var path = require("path");

const mongoose = require("mongoose");
const Personal = require("../models/Personal");

const {mongoDBcredentials, mongoDBconnectionInfo} =  require("../credentials/credentials");
const mongoDBconnection = require("../database/connection")

// app.use(session({ secret: mongoDBconnectionInfo["sessionSecret"] }));

app.use(express.json());

app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
  })
);

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoDBconnection.on("error", console.error.bind(console,"connection error:"));
mongoDBconnection.once("open", function(){
    console.log("Connected sucessfully!");
});

app.listen(mongoDBconnectionInfo["port"], () => {
  console.log(`Server running at port ${mongoDBconnectionInfo["port"]}!`)
});
