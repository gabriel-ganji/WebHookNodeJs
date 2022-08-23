const Acess = require("../database/collection");

const save = function (data) {
    console.log('Estamos em save!');
    const token = data.header.uuid;
    const header = data.header;
    const body = data.body;
    let created_at = new Date();
    created_at = created_at;

    const acess = { token, header, body, created_at };
    
    try {
        Acess.createIndex({ "created_at": 1 }, { expireAfterSeconds: 259200 });
        Acess.insertOne(acess);
        return { message: "Dados armazenados com sucesso no MongoDBAtlas"}
    } catch (error) {
        return error

    }

}

module.exports = save;