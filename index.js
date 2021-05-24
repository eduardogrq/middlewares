const { response } = require('express')
const express = require('express')
const routerB = require('./routerB.js')

const server = express()

// function middleware (request, response, next) {
//     console.log('middleware externo')
//     next()
// }

// server.use(middleware)

server.use((request, response, next) => {
    console.log('middleware a nivel de aplicación')
    next()
})

server.use('/b', routerB)

server.get('/', (request, response, next) => {
    console.log('Middleware a nivel de ruta')
    next()
}, (request, response) => {
    response.json({message: 'ruta a'})
})

server.listen(8080, () => {
    console.log('server listening')
})