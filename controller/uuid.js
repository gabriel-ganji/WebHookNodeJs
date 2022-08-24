const access = require("../database/collection");

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
    await acesses.deleteOne({ _id: uuid });
};

module.exports={
    getAllDatabyUUID,
    getHeaderbyUUID,
    generateNewUUID,
    checkIfUUIDExists,
    deleteUUID,
};