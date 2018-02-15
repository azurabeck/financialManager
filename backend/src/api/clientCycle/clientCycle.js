const restful = require('node-restful')
const mongoose = restful.mongoose

const emailsSchema = new mongoose.Schema({
    email: { type: String, required: true }
})

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cpf: { type: Number, required: true },    
    notes: { type: Number, required: false },
    emails: [emailsSchema]
})

module.exports = restful.model('BillingCycle', clientSchema)