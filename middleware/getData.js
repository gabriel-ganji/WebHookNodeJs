const database = require("../database/connection");
const acesses = require("../database/collection");
const getData = async function (tokenUUID) {

    const dataByToken = await acesses.find({ token: tokenUUID }).toArray();
    return dataByToken;

};

module.exports = getData;