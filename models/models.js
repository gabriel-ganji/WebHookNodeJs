const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false,
    },
    token: {
        type: String,
        required: false,
    },
});

const user = mongoose.model("CollectedData", UserSchema);
module.exports = user;