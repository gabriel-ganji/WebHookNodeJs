const userModel = require("../models/modelSaveRequest");

const getData = function (tokenUUID) {

    //const users = userModel.find({ token: tokenUUID });
    //return users;
    console.log('getData');
    try {
        const users = userModel.find();
        return users;
    } catch (error) {
        return error;
    }

}

module.exports = getData;