const database = require("../database/database");

const save = function (data) {
    console.log('Estamos em save!');
    
    const token = data.header.uuid;
    const date = data.header.date;
    const header = data.header;
    const body = data.body;

    //salvar os dados acima no mongoose schema
    
    return 'Nada salvo no MongoDB :(';

}

module.exports = save;