
//Modelo que irá guardar o primeiro TOKEN(UUID) mesmo sem body e o header;
//Modelo que irá armazenar o TOKEN(UUID) com o body e o header;

const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    active: { type: Boolean, default: true },
    header: { type: String },
    body: { type: String },
    createdAt: {
        type: String,
        required: true,
        default: moment().tz("America/Sao_Paulo").format("DD-MM-YYYY HH:mm:ss.SSS"),
      },
      updatedAt: {
        type: String,
        required: true,
        default: moment().tz("America/Sao_Paulo").format("DD-MM-YYYY HH:mm:ss.SSS"),
      },
});

const user = mongoose.model("collecteddata", UserSchema);
module.exports = user;