const restful = require('node-restful')
const mongoose = restful.mongoose

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cpf: { type: Number, required: true },
    emails: { type: String, required: true }
})

module.exports = restful.model('BillingCycle', clientSchema)