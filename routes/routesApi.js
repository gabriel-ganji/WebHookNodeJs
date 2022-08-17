const express = require("express");
const verify = require("../controller/verificationUUID");
const handleData = require("../controller/handleData");
const router = express();

router.use(express.json());

//Rota de geração de uuid
router.get("/", async (req, res) => { 
    const result = verify(null, req);
    res.json(result);
});

//Emissão de dados do database para o front
router.get("/:uuid", async (req, res) => {
    const result = verify(req.params.uuid, req);
    res.json(result);
});

//Rota de gravação de dados no data base
router.post("/:uuid", async (req, res) => {
    const handle = handleData(req.params.uuid, req);
    res.json(handle);
});

module.exports = router;