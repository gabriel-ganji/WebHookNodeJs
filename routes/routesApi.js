const createUUID = require("../controller/generateUUID");
const express = require("express");
const router = express();

router.use(express.json());

const urlUuid = createUUID();

const dataObj = { data: '' };

//rota de criação de uuid
router.get("/", async (req, res) => {
    const verification = verify(req.params.uuid);
    res.json(verification);
});

//rota de emissão de dados do database para o front
router.get("/:uuid", async (req, res) => {
    const verification = verify(req.params.uuid);
    res.json(verification);
});

//rota de gravação de dados no data base
router.post("/:uuid", async (req, res) => {
    const date = new Date();
    
    console.log('app.post(..., ()=>{...})');
    const allRequest = req;
    //console.log(allRequest);

    let bodyReq = req.body;
    let hottok = bodyReq.hottok;

    const rawHeaders = new Object();

    for (let i = 0; i < allRequest.rawHeaders.length; i = i + 2) {
        rawHeaders[allRequest.rawHeaders[i]] = allRequest.rawHeaders[i + 1];
    }
    rawHeaders["urluuid"] = urlUuid;
    rawHeaders["date"] = date;
    rawHeaders["data"] = allRequest.body;
    dataObj.data = rawHeaders;

    const Acess = {
        hottok,
    };

    if (Acess.hottok !== undefined && typeof Acess.hottok == "string") {
        try {
            //criando dados
            await Personal.create(Acess);
            res.status(200).json({ message: "Person data recorded. Sucess!" });
        } catch (error) {
            res.status(500).json({ message: "json was received but not saved :(" });
        }
    } else {
        res.status(400).json({
            error: 400,
            type: "bad request",
            message: "There is something wrong with your json object :(",
        });
    }
});

module.exports = router;