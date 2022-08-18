const Acess = require("../database/models/modelSaveRequest");

const getData = async function (tokenUUID) {
    const dataMongoDB = [];

    const dataByToken = await Acess.find({token:tokenUUID});
    console.log(dataByToken);
    return dataByToken;

    // try{
    // }catch(error){
    //     console.log(error);
    //     return error.message;
    // }

//     const dataByToken = Acess.find({ token: tokenUUID }, (error, data) => {
//         if (error) {
//             return "Error";
//         }
//         else {
//             console.log(data);
//             return data;
//         }
    // });
}


module.exports = getData;