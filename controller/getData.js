const userModel = require("../database/models/modelSaveRequest");
const Acess = require("../database/models/modelSaveRequest");

const getData = function (tokenUUID) {
    const dataMongoDB = []
    const dataByToken = Acess.find({ token: tokenUUID }, (error, data) => {
        if (error) {
            return error;
        }
        else {
            return data;
        }
    });
    console.log(data);
}

module.exports = getData;