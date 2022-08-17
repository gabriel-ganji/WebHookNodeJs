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
        return 'SAVE ON MONGO DB ATLAS'
    } catch (error) {
        return error
    }

}

module.exports = save;