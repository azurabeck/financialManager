const ClientCycle = require('./clientCycle')
const errorHandler = require('../common/errorHandler')

ClientCycle.methods(['get', 'post', 'put', 'delete'])
ClientCycle.updateOptions({new: true, runValidators: true})
ClientCycle.after('post', errorHandler).after('put', errorHandler)

ClientCycle.route('count', (req, res, next) => {
    ClientCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

ClientCycle.route('summary', (req, res, next) => {
    ClientCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = ClientCycle