const mongoose = require("mongoose");
let created_at = new Date();

const Access = mongoose.model('Access', {
    _id: {type:string, required:true},
    header: {},
    body: {},
    createdAt: {
        type: Date,
        required: true,
        // default: new Date("<dd-mm-YYYY>"),
    },
});

module.exports = Access;