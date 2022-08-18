const Acess = require("../database/models/modelSaveRequest");

const getData = async function (tokenUUID) {

    const dataByToken = await Acess.find({token:tokenUUID});
    return dataByToken;

}

module.exports = getData;