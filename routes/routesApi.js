const { json } = require("express");
const express = require("express");
const Access = require("../database/collection");
const router = express();
const {
    getAllDatabyUUID,
    getHeaderbyUUID,
    generateNewUUID,
    checkIfUUIDExists,
    deleteUUID,
    dataProcessingByUUID,
    saveDataByUUID,
} = require("../controller/uuid");

router.use(express.json());

// router.use(function (req, res, next) {
//     // console.log('Time:', Date.now());
//     const uuid = generateNewUUID();
//     // next(uuid);
// });

//Rota para gerar uuid e armazenar uuid no mongo
router.get("/getuuid", async (req, res) => {
    // console.log( req.params.uuid );
    const uuid = await generateNewUUID();
    // console.log(uuid);
    //  console.log(JSON.stringify(req.headers));
    if (uuid.length !== 36 || uuid == undefined) {
        res.status(400).json({ Error: 400, Type: "Bad Request"});
    } else {
        res.status(200).json(uuid);  
    }
});

router.get("/geturluuid", async(req, res, next) => {
    const uuid = await generateNewUUID();

    // console.log(uuid);
    if (uuid.length !== 36 || uuid == undefined) {
        res.status(400).json({ Error: 400, Type: "Bad Request"});
    } else {
        res.status(200).json( `create-react-app-xi-three-32.vercel.app/${uuid}` );
    }
});

//Emissão de dados do database para o front
router.get("/:uuid", async (req, res) => {

    const data = await getAllDatabyUUID(req.params.uuid);


    if (req.params.uuid.length !== 36) {
    
        res.status(400).json({ Error: 400, Type: "Bad Request", message: "Algo deu errado, tente novamente." });

    } else {
        
        if (data === []) {
            res.status(400).json({ Error: 400, Type: "Bad Request", message: "Algo deu errado, tente novamente." });
        } else {
            // console.log(data)
            res.status(200).json(data);
        }
    }
});

//Rota de gravação de dados no data base
router.post("/:uuid", async (req, res) => {

    // console.log(req);

    if (req.params.uuid.length !== 36) {

        res.status(400).json({ Error: 400, Type: "Bad Request", message: "Algo deu errado, tente novamente." });
    
    } else {
        
        const data = await getAllDatabyUUID(req.params.uuid);

        if (data === []) {
        
            res.status(400).json({ Error: 400, Type: "Bad Request", message: "O token de sua urluuid não é válido" });

        } else {

            const handle = dataProcessingByUUID(req.params.uuid, req, "POST");
            res.status(200).json(handle);
       
        }
    }

});

router.delete("/:uuid", async (req, res) => {
    console.log(req.params.uuid);
    await Access.deleteMany({ token: req.params.uuid });
    res.status(200).json({ message: "ok" });

});

module.exports = router;