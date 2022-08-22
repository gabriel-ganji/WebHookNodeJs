const acess = require("../database/collection");

const searchAcess = async (search) => {

    try {
      var _results = [];
      var _result = await acess.find({
        token: { $regex: search, $options: "i" },
      });
      _results = _results.concat(_result);
      _result = await acess.find({
        header: { $regex: search, $options: "i" },
      });
      _results = _results.concat(_result);
      _result = await acess.find({
        body: { $regex: search, $options: "i" },
      });
      _results = _results.concat(_result);
      _result = await acess.find({
        created_at: { $regex: search, $options: "i" },
      });
        
        _results = _results.concat(_result);
        
        console.log(_results);
  
      var _unique = [];
      for (let x = 0; x < _results.length; x++) {
        const elementX = JSON.parse(JSON.stringify(_results[x]));
        var _contain = false;
        for (let y = 0; y < _unique.length; y++) {
          const elementY = JSON.parse(JSON.stringify(_unique[y]));
          if (elementX._id === elementY._id) {
            _contain = true;
            break;
          }
        }
        if (!_contain) {
          _unique.push(elementX);
        }
      }
      return _unique;
    } catch (error) {
      return { error: true, message: error, status: 400 };
    }

};
  
module.exports = searchAcess;