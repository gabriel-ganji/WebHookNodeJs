const userModel = require("../models/modelSaveRequest");

const getData = function (tokenUUID) {

    const users = userModel.find({ token: tokenUUID });
    return users;

}

module.exports = getData;