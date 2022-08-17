const schema = require("./models/modelSaveRequest");
const mongoDBconnection = require("./connection");

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
    await schema.create({ data });
}

module.exports ={ deleteItemById, deleteCollection, insertData};