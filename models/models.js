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
    active: { type: Boolean, default: true },
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