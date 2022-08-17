const time = require("./timePost");
const saveOnMongo = require("./saveOnMongo");

const dataReq = function (uuid, req) {
    
    const fullRequest = req;
    const webhookRequest = {
        header: {},
        body: {}
    }
    const header = new Object();

    for (let i = 0; i < fullRequest.rawHeaders.length; i += 2) {
        header[fullRequest.rawHeaders[i]] = fullRequest.rawHeaders[i + 1];
    }

    header["uuid"] = uuid;
    header["date"] = time();

    webhookRequest.header = header;
    webhookRequest.body = req.body;
    
    //passando dados para a função save em controller/saveOnMongo.js
    const status = saveOnMongo(webhookRequest);
    return status;
}

module.exports = dataReq;