const mongoose = require('mongoose')

const PersonalId = mongoose.model('PersonalAcess', {
    hottok: String
})

module.exports = PersonalId;