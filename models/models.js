const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false, // MUDAR PARA TRUE
    },
    token: {
        type: String,
        required: false, // MUDAR PARA TRUE
    },
});

const user = mongoose.model("collecteddata", UserSchema);
module.exports = user;