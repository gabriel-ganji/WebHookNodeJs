const { MongoClient } = require("mongodb");
const { mongoDBcredentials, mongoDBconnectionInfo } = require("./credentials");

const uri = `mongodb+srv://${mongoDBcredentials["username"]}:${mongoDBcredentials["password"]}@${mongoDBconnectionInfo["cluster"]}.mongodb.net/${mongoDBconnectionInfo["dbname"]}?retryWrites=true `;

const client = new MongoClient(uri);

const database = client.db('WebhookEvermart');

module.exports = database;