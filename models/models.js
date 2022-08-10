const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});



const user = mongoose.model("WebhookEvermart", UserSchema)
module.exports = user;