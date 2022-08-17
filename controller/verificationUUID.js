const createUUID = require("./generateUUID");
const handleData = require("./handleData");
const getData = require("./getData");

const verify = function (uuid=null, req) {
    //caso requisição não vier com uuid
    if ( uuid === null) {
        const uuid = createUUID();
        handleData(uuid, req);
        return uuid;
    //caso venha com uuid
    } else {
        //verficar se uuid é válido < 72 horas
        try {
            const data = getData(uuid);
            return data;
        //caso não seja valido ou não haja no DB
        } catch {
            verify(null, req);
        }
    }
}

module.exports = verify;