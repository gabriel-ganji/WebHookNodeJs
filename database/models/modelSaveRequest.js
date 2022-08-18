const mongoose = require("mongoose");

const Acess = mongoose.model('Acess', {
    token: String,
    header: String,
    body: String,
    created_at: String,

});

module.exports = Acess;