const express = require('express')
const auth = require('./auth')


module.exports = function (server) {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    server.use('/api', router) 

    /*
    * Rotas protegidas por Token JWT
    */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)
    protectedApi.use(auth)

    // Rotas da Lista Cliente 
    const clientCycle = require('../api/clientCycle/clientCycleService')
    clientCycle.register(router, '/clientCycle')

    /* Rotas da Login
    const clientCycle = require('../api/clientCycle/clientCycleService')
    clientCycle.register(protectedApi, '/clientCycle')*/

    /*
      * Rotas abertas
      */

    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/AuthService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}
