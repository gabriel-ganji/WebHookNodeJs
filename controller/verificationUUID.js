const getData = require("./getData");

const verify = function (uuid, req) {
    //caso requisição não vier com uuid
    if ( uuid === null || uuid.length < 36) {
        return 'something wrong';
    //caso venha com uuid
    } else {
        //verficar se uuid é válido < 72 horas
        try {
            const data = getData(uuid);
            console.log(data);
            return 0;
        //caso não seja valido ou não haja no DB
        } catch {
            verify(null, req);
        }
    }
}

module.exports = verify;