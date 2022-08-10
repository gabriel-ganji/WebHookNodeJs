//initial config
const express = require("express");
const app = express();
const session = require("express-session");
const fileupload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
var path = require("path");

const mongoose = require("mongoose");
const Personal = require("./models/Personal");

const {mongoDBcredentials, mongoDBconnection} =  require("./credentials/credentials");

app.use(session({ secret: mongoDBconnection["sessionSecret"] }));
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
  })
);

app.use(cors());

//forma de ler JSON / middlewares

app.use(
  express.urlencoded({
    extended: true,
  })
);

//rotas da API

app.post("/PesonalAcess", async (req, res) => {
  const { id } = req.body;

  const PersonalId = {id,};

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

//rota inicial / endpoint

//entregar uma porta
mongoose
  // .connect(credentialsMongoDB["connectionMoongose"])
  .connect(
    `mongodb+srv://${mongoDBcredentials["username"]}:${mongoDBcredentials["password"]}@${mongoDBconnection["cluster"]}.mongodb.net/?retryWrites=true&w=majority `
  )
  .then(() => {
    console.log("Conectamos ao MongoDB!");
    app.listen(mongoDBconnection["port"]);
  })
  .catch(() => {
    console.log(mongoose.connect);
    console.log("ERROR!");
  });
