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

app.use(session({ secret: "dbsdhbchsdcbjhscs25dc" }));
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
  })
);
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

//forma de ler JSON / middlewares

app.use(
  express.urlencoded({
    extended: true,
  })
);

//rotas da API
 app.post("/PesonalAcess", async (req, res) => {
    //req.body
    const { id } = req.body;

    const PersonalId = {
        id,
    };
     console.log("PersonalID Antes do TRY: ", PersonalId.id);
     if (PersonalId.id !== undefined) {
        try {
            //criando dados
            await Personal.create(PersonalId);
            res.status(201).json({ message: "Pessoa inserida com sucesso" });
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
/*app.post("/PersonalAcess", async (req, res) => {
    const { id } = req.body;
    const _result = await postUser(
      id
    );
    if (_result && _result.error) {
      res.status(_result.status).send(_result.message);
    } else {
      res.status(201).json(_result);
    }
  });*/  

//rota inicial / endpoint

app.get("/api", (req, res) => {
  //mostrar uma req
  res.json({ message: "Hello World!" });
});

//entregar uma porta
mongoose
  .connect(
    "mongodb+srv://interships:y60TGJW5Q8cEJ3Tx@evermartmongodb.dbkte1c.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectamos ao MongoDB!");
    app.listen(9200);
  })
  .catch(() => {
    console.log("ERROR!");
  });
