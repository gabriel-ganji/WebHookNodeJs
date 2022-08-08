const mongoose = require('mongoose')

const PersonalId = mongoose.model('PersonalAcess', {
    id: String
})

module.exports = PersonalId;