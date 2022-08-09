// Arquivo que contém a conexão com o banco de dados.

const { default: mongoose, connect, connection } = require("mongoose");

const {mongoDBcredentials, mongoDBconnection} =  require("../credentials/credentials");

try{
    mongoose.connect(
        `mongodb+srv://${mongoDBcredentials["username"]}:${mongoDBcredentials["password"]}@${mongoDBconnection["cluster"]}.mongodb.net/?retryWrites=true&w=majority `
        );
} catch (error) {
    res.status(500).json({ error: error });
}
const dbConnection = mongoose.connection;
dbConnection.on("error", console.error.bind(console,"connection error:"));
dbConnection.once("open", function(){
    console.log("Connected sucessfully!");
})