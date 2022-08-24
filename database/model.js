const mongoose = require("mongoose");
let created_at = new Date();
    created_at = created_at;
//old way
const Access = mongoose.model('Acess', {
    _id: {type:string, required:true},
    header: {},
    body: {},
    created_at: {type:Date, required:true, default: new Date(),}
});

module.exports = Access;