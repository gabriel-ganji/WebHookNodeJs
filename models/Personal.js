const mongoose = require('mongoose')

const PersonalAcess = mongoose.model('PersonalAcess', {
    hottok: String
})

module.exports = PersonalAcess;