const mongoose = require('mongoose')

// module.exports = {
//     password:"y60TGJW5Q8cEJ3Tx",
//     connectionMoongose:"mongodb+srv://interships:y60TGJW5Q8cEJ3Tx@evermartmongodb.dbkte1c.mongodb.net/?retryWrites=true&w=majority",
//     dbname:"myFirstDatabase",
//     username:"interships",
//     connectionMoongosePort:9200,
//     cluster:"evermartmongodb.dbkte1c"
// };

const mongoDBcredentials = {
    username:"interships",
    password:"y60TGJW5Q8cEJ3Tx",
};
const mongoDBconnection = {
    dbname:"myFirstDatabase",
    sessionSecret:"dbsdhbchsdcbjhscs25dc",
    cluster:"evermartmongodb.dbkte1c",
    port:9200
};

module.exports = {
    mongoDBcredentials, mongoDBconnection
}
// require = require(mongoDBcredentials)(mongoDBconnection)
// module.exports=require('credentials.js')
// export {mongoDBcredentials, mongoDBconnection};
// export {Default as mongoDBcredentials};
// export {Default as mongoDBconnection};