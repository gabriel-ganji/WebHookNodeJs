const database = require("../database/database");
const Acess = require("../database/models/modelSaveRequest")

const save = function (data) {
    console.log('Estamos em save!');
    const token = data.header.uuid;
    const header = JSON.stringify(data.header);
    const body = JSON.stringify(data.body);
    
    const acess = { token, header, body };
    try {
        Acess.create(acess);
        return { message: "Dados armazenados com sucesso no MongoDBAtlas"}
    } catch (error) {
        return error
    }

}

module.exports = save;