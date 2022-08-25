const access = require("../database/collection");
// const moment = require("moment");

const getAllDatabyUUID = async function (tokenUUID) {
    const data = await access.find({ _id: tokenUUID });
    return data;
};

const getHeaderbyUUID = async function (tokenUUID) {
    const data = await access.find({ _id: tokenUUID }, {_id: 0, header});
    return data;
};

const generateNewUUID = async function (){
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
    );
    console.log(uuid);
    return uuid;
};

const checkIfUUIDExists = async function (tokenUUID) {
    const data = await access.find({ _id: tokenUUID }, {_id: 0, header});
    if(access.find({ _id: tokenUUID }) == 0){
        return [];
    }else{
        return data;
    }
};

const deleteUUID = async function (tokenUUID){
    await acesses.deleteOne({ _id: tokenUUID });
};

const dataProcessingByUUID = async function (uuid, req, reqType){

    const fullRequest = req;

    const webhookRequest = {
        header: {},
        body: {}
    }

    const header = new Object();

    for (let i = 0; i < fullRequest.rawHeaders.length; i += 2) {
        header[fullRequest.rawHeaders[i]] = fullRequest.rawHeaders[i + 1];
    }

    header["TypeReq"] = reqType
    header["uuid"] = uuid;
    header["date"] = new Date();

    webhookRequest.header = header;
    webhookRequest.body = req.body;
    

    const status = saveDataByUUID(webhookRequest);
    console.log(status);
    return status;
}

const saveDataByUUID = async function (data){

    const _id = data.header.uuid;
    const header = data.header;
    const body = data.body;
    let created_at = new Date();
    created_at = created_at;
    
    const access_data = { _id, header, body, created_at };
    
    try {
        access.createIndex({ "created_at": 1 }, { expireAfterSeconds: 259200 });
        access.insertOne(access_data);
        return { message: "Dados armazenados com sucesso no MongoDBAtlas"}
    } catch (error) {
        return error
    }
}

module.exports={
    getAllDatabyUUID,
    getHeaderbyUUID,
    generateNewUUID,
    checkIfUUIDExists,
    deleteUUID,
    dataProcessingByUUID,
    saveDataByUUID,
};