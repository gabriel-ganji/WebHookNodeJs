const { MongoClient } = require("mongodb");

const { mongoDBcredentials, mongoDBconnectionInfo } = require("./credentials")

const database = require('./connection');

const acesses = database.collection('access');

module.exports = acesses;