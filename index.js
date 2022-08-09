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
const credentialsMongoDB = require('./credentials/credentials.js');


app.use(session({ secret: credentialsMongoDB["sessionSecret"] }));
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
  const { id } = req.body;

  const PersonalId = {id,};

  try {
    //criando dados
    await Personal.create(PersonalId);
    console.log("PersonalId: ", PersonalId);
    res.status(201).json({ message: "Pessoa inserida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//rota inicial / endpoint

app.get("/api", (req, res) => {
  //mostrar uma req
  res.json({ message: "Hello World!" });
});

//entregar uma porta
mongoose
  .connect(credentialsMongoDB["connectionMoongose"])
  .then(() => {
    console.log("Conectamos ao MongoDB!");
    app.listen(credentialsMongoDB["connectionMoongosePort"]);
  })
  .catch(() => {
    console.log(mongoose.connect);
    console.log("ERROR!");
  });
