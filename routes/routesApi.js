const { json } = require("express");
const express = require("express");
const handleData = require("../controller/handleData");
const generateAndSaveUUID = require("../middleware/generateAndSaveUUID");
const Acess = require("../database/collection");
const getData = require("../middleware/getData");
const router = express();
const deleteItem = express("../middleware/deleteItem");
const findData = express("../middleware/findData");
const findSubData = express("../middleware/findSubData");

router.use(express.json());

/*router.get("/searchBy", async (req, res) => {
    
    console.log(req.query);
    
    try {
        const _result = await findData(req.query.search);
        if (_result && _result.error) {
        res.status(_result.status).send(_result.message);
        } else {
        res.status(200).json(_result);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});*/

//Rota para gerar uuid e armazenar uuid no mongo
router.get("/", async (req, res) => {

    const urluuid = await generateAndSaveUUID(req);

    if (urluuid.length !== 36 || urluuid == undefined) {
        res.status(400).json({ Error: 400, Type: "Bad Request", message: "Algo deu errado, tente novamente." });
    } else {
        res.status(200).json( urluuid );
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

    console.log(req);

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

router.delete("/:uuid", async (req, res) => {
    console.log(req.params.uuid);
    await Acess.deleteMany({ token: req.params.uuid });
    res.status(200).json({ message: "ok" });

});

/*router.get("/bySubCategory", async (req, res) => {
    try {
      if (!req.query && !req.query.subCategory) {
        res.status(400).send('O parametro "subCategory" é obrigatório');
        return;
      }
      const _result = await findSubData(
        req.query.subCategory
      );
      if (_result &&_result.error) {
        res.status(_result.status).send(_result.message);
      } else {
        res.status(200).json(_result);
      }
    } catch (error) {
      res.status(500).send(error);
    }
});*/



module.exports = router;