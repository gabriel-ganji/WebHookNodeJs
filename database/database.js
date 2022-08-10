const http = require("http");
const mongoose = require("mongoose");
const mongoDBconnection = require("./connection");

dropDatabase = mongoose.connection.db.dropDatabase();

module.exports = dropDatabase;