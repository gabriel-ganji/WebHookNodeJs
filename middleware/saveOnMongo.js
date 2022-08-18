const database = require("../database/database");
const Acess = require("../database/models/modelSaveRequest")

const save = function (data) {
    console.log('Estamos em save!');
    const token = data.header.uuid;
    const header = data.header;
    const body = data.body;
    const date = new Date();
    const created_at = String(date);

    const acess = { token, header, body, created_at };
    
    try {
        Acess.create(acess);
        return { message: "Dados armazenados com sucesso no MongoDBAtlas"}
    } catch (error) {
        return error
    }

}

module.exports = save;