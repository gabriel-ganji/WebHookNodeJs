const { MongoClient } = require("mongodb");

const { mongoDBcredentials, mongoDBconnectionInfo } = require("./credentials")

//new way
    const database = require('./connection');

    const acesses = database.collection('acesses');

module.exports = acesses;