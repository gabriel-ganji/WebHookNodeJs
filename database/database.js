const schema = require("../models/models");
const mongoDBconnection = require("../database/connection");

async function deleteItemById(ItemId) {
    try{
        await schema.deleteOne({_id:ItemId})
    }
    catch(error){
        console.log("Unable to delete item: ", error);
    }
}

async function deleteCollection(params) {
    try {
        await schema.collection.drop()
    } catch (error) {
        console.log("Unable to drop collection: ", error);
    }
}

async function insertData(data){
    await schema.create({ _id:data });
}
// FUNÇÃO PARA TESTE
async function insertData(){
    await schema.create({ name: 'Masteringjs.io' });
}
module.exports ={ deleteItemById, deleteCollection};