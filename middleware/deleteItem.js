const acesses = require("../database/collection");

const deleteItens = async function (uuid) {
    
    console.log('estamos em delete!');
    console.log('Estamos em delete!');
    
    await acesses.deleteOne({ token: uuid });
    
};

module.exports = deleteItens;
