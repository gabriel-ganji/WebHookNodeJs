const mongoose = require("mongoose");

//old way
const Acess = mongoose.model('Acess', {
    token: {},
    header: {},
    body: {},
    created_at: {}
});

module.exports = Acess;