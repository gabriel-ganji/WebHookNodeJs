const http = require("http");
const mongoose = require("mongoose");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const mongoDBconnection = require("./connection");
const schema = require("../models/models");


async function deleteItemById(ItemId) {
    try{
        // const entry  = await schema.create({ name: 'Masteringjs.io' });
        await schema.deleteOne({_id:ItemId})
    //    schema.deleteOne({"_id":ItemId});
    }
    catch(error){
        console.log("Unable to delete item: ", error);
    }
}

module.exports = deleteItemById;