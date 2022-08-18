//initial config
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
var path = require("path");

const Router = require("../routes/routes");
const mongoose = require("mongoose");
const {deleteItemById,deleteCollection} = require("../database/database");

const {mongoDBcredentials, mongoDBconnectionInfo} =  require("../credentials/credentials");
const mongoDBconnection = require("../database/connection");

app.use(Router);


app.use(express.json());
app.use(cors());

app.use()

app.post("/PesonalAcess", async (req, res) => {
    
  const allRequest = req;
       
  const { hottok } = req.body;
  
  const rawHeaders = new Object();

  for (let i = 0; i < allRequest.rawHeaders.length; i=i+2) {
    rawHeaders[(allRequest.rawHeaders[(i)])] = allRequest.rawHeaders[(i + 1)];
  }
  app.get("/api", (req, res) => {
   //mostrar uma req
   res.json({ rawHeaders });
 });
  //console.log('rawHeaders : ', rawHeaders);

   const Acess = {
       hottok,
   };

    if (Acess.hottok !== undefined && typeof (Acess.hottok) == 'string') {
       try {
           //criando dados
           await Personal.create(Acess);
           res.status(201).json({ message: "Person data recorded. Sucess!" });
       } catch (error) {
           res.status(500).json({ error: error });
       }
    } else {
        res.status(400).json({
            error: 400,
            type: "bad request",
            message: "There is something wrong with your json object :("
        });
    }

});

mongoDBconnection.on("error", console.error.bind(console,"connection error:"));
mongoDBconnection.once("open", function(){
  console.log("Connected sucessfully!");
});

app.listen(mongoDBconnectionInfo["port"], () => {
  console.log(`Server running at port ${mongoDBconnectionInfo["port"]}!`);
});


// deleteCollection();
// deleteItemById();
// alterando aqui para subir a branch da Mariana
