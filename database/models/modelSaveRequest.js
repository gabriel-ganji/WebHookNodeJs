const mongoose = require("mongoose");

const Acess = mongoose.model('Acess', {
    token: String,
    header: String,
    body: String,

})

module.exports = Acess;