const { default: mongoose } = require("mongoose");
import mongoDBcredentials from '../credentials/credentials'
mongoose.connect(
    "mongodb+srv://interships:y60TGJW5Q8cEJ3Tx@evermartmongodb.dbkte1c.mongodb.net/?retryWrites=true&w=majority"
);