const express = require("express");
const verify = require("../controller/verificationUUID");
const handleData = require("../controller/handleData");
const generateAndSaveUUID = require("../controller/generateAndSaveUUID");
const router = express();

router.use(express.json());

//Rota para gerar uuid e armazenar uuid no mongo 
router.get("/", async (req, res) => { 
    const uuid = generateAndSaveUUID(req);
    res.json({ uuid });
});

//Emissão de dados do database para o front
router.get("/:uuid", async (req, res) => {
    const result = verify(req.params.uuid, req);
    res.json({result});
});

//Rota de gravação de dados no data base
router.post("/:uuid", async (req, res) => {
    const handle = handleData(req.params.uuid, req);
    res.json({ handle });
});

module.exports = router;