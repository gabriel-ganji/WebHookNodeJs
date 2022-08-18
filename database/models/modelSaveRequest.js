const mongoose = require("mongoose");

const Acess = mongoose.model('Acess', {
    token: String,
    header: {},
    body: {},
    created_at: String,

});

module.exports = Acess;