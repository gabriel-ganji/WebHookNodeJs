const { json } = require("express");
const express = require("express");
const handleData = require("../controller/handleData");
const generateAndSaveUUID = require("../middleware/generateAndSaveUUID");
const Acess = require("../database/models/modelSaveRequest");
const getData = require("../middleware/getData");
const router = express();

router.use(express.json());

//Rota para gerar uuid e armazenar uuid no mongo 
router.get("/", async (req, res) => { 

    const urluuid = generateAndSaveUUID(req);
    
    if (urluuid.length !== 36 || urluuid == undefined) {
        res.status(400).json({ Error: 400, Type: "Bad Request", message: "Algo deu errado, tente novamente." });
    } else {
        res.status(200).json({ urluuid });
    }

});

//Emissão de dados do database para o front
router.get("/:uuid", async (req, res) => {

    const data = await getData(req.params.uuid);

    if (req.params.uuid.length !== 36) {
    
        res.status(400).json({ Error: 400, Type: "Bad Request", message: "Algo deu errado, tente novamente." });

    } else {
        
        if (data === []) {
            res.status(400).json({ Error: 400, Type: "Bad Request", message: "Algo deu errado, tente novamente." });
        } else {
            res.status(200).json(data);
        }
        
    }
    
});

//Rota de gravação de dados no data base
router.post("/:uuid", async (req, res) => {

    if (req.params.uuid.length !== 36) {

        res.status(400).json({ Error: 400, Type: "Bad Request", message: "Algo deu errado, tente novamente." });
    
    } else {
        
        const data = await getData(req.params.uuid);

        if (data === []) {
        
            res.status(400).json({ Error: 400, Type: "Bad Request", message: "O token de sua urluuid não é válido" });

        } else {

            const handle = handleData(req.params.uuid, req);
            res.status(200).json(handle);
       
        }
    }

});

module.exports = router;