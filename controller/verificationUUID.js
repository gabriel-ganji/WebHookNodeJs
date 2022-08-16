const createUUID = require("./generateUUID");

const verify = function (uuid) {
    //caso requisição não vier com uuid
    if (uuid == ' ') {
        //gerando uuid
        const uuid = createUUID();
        //gravar no mongo;
        
        //retornar uuid para o front
        return uuid;

    } else {
        //extrair dados do mongo com uuid que veio na requisição;
        //return; -> TODOS OS DADOS com tal uuid para o front
    }
}

module.exports = verify;