const Acess = require("../database/models/modelSaveRequest");

const getData = function (tokenUUID) {
    const dataMongoDB = []
    const dataByToken = Acess.find({ token: tokenUUID }, (error, data) => {
        if (error) {
            return "Error";
        }
        else {
            console.log(data);
            return data;
        }
    });
}

module.exports = getData;