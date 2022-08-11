//initial config
const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
var path = require("path");

const Router = require("./routes");
const mongoose = require("mongoose");
const deleteItemById = require("../database/database");

const {mongoDBcredentials, mongoDBconnectionInfo} =  require("../credentials/credentials");
const mongoDBconnection = require("../database/connection")



app.use(Router)
app.use(express.json());
app.use(cors());

mongoDBconnection.on("error", console.error.bind(console,"connection error:"));
mongoDBconnection.once("open", function(){
  console.log("Connected sucessfully!");
  // TESTE DE DROP DO BANCO DE DADOS
  // mongoDBconnection.dropDatabase();
  // deleteCollection();
  // mongoDBconnection.dropCollection("");
  deleteItemById("62f54bf6aff4f490bf42ddfc");
  // console.log(mongoDBconnection.collections["webhookevermarts"]);
  // delete mongoose.connection.models['test.personalacesses'];
});

app.listen(mongoDBconnectionInfo["port"], () => {
  console.log(`Server running at port ${mongoDBconnectionInfo["port"]}!`)
});

