
//Modelo que irá guardar o primeiro TOKEN(UUID) mesmo sem body e o header;
//Modelo que irá armazenar o TOKEN(UUID) com o body e o header;

const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    token: {
        type: String,
        required: false
    },
    active: { type: Boolean, default: true },
    header: { type: String, require: false },
    body: { type: String, require: false }
 
});

const user = mongoose.model("collecteddata", UserSchema);
module.exports = user;