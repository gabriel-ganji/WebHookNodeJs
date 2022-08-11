// Arquivo que contém a conexão com o banco de dados.

const { default: mongoose, connect, connection } = require("mongoose");

const {mongoDBcredentials, mongoDBconnectionInfo} =  require("../credentials/credentials");

    
try{
    mongoose.connect(
        `mongodb+srv://${mongoDBcredentials["username"]}:${mongoDBcredentials["password"]}@${mongoDBconnectionInfo["cluster"]}.mongodb.net/${mongoDBconnectionInfo["dbname"]}?retryWrites=true `,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        );
    } catch (error) {
        console.log(mongoose.connect);
        console.log("ERROR!");
    };               

const mongoDBconnection = mongoose.connection;


module.exports=mongoDBconnection;