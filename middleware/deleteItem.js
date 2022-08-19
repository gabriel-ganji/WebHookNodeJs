const Acess = require("../database/collection");

const deleteItens = function (uuid) {
    
    try {
        
        console.log('Estamos em delete!');
        Acess.deleteMany({ token: uuid });
        
        return 'Ok';

    } catch (error) {
       
        return error;
    
    }
    
};

module.exports = deleteItens;
