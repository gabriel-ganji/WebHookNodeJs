const createUUID = require("./generateUUID");
const handleData = require("./handleData");
const getData = require("./getData");

const verify = function (uuid=null, req) {
    //caso requisição não vier com uuid
    if ( uuid === null) {
    
        const uuid = createUUID();
        handleData(uuid, req);

        return uuid;

    } else {
        const data = getData(uuid);
        return data;
    }
}

module.exports = verify;