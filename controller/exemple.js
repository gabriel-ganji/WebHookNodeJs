const UserSchema = require("../models/models");

const exemplo = async (id, token) => {
  try {
    const _currentUser = await UserSchema.findOne({ id: id });
    if (_currentUser) {
      return { error: true, message: "O id já está em uso, tente novamente", status: 400 };
    }
    if (!id) {
      return {
        error: true,
        message: "O id não foi retornado",
        status: 400,
      };
    }
    if (!token) {
      return {
        error: true,
        message: "O token não foi retornado",
        status: 400,
      };
    }
  } catch (error) {
    return { error: true, message: error, status: 400 };
  }
};

module.exports = {
  exemplo,
};
