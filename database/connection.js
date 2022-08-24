const { MongoClient } = require("mongodb");
const { mongoDBcredentials } = require("./credentials");

const uri = `mongodb+srv://${mongoDBcredentials["username"]}:${mongoDBcredentials["password"]}@${mongoDBcredentials["cluster"]}.mongodb.net/${mongoDBcredentials["dbname"]}?retryWrites=true `;

const client = new MongoClient(uri);

const database = client.db('WebhookEvermart');

module.exports = database;