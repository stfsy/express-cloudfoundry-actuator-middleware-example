'use strict'

const express = require('express')
const http = require('http')
const app = express()

const actuator = require('express-cloudfoundry-actuator-middleware')
app.use(actuator())

app.get('/*', (req, res) => {
    res.setHeader('Content-Type', 'application/json');    
    res.status(200).send(JSON.stringify({
        msg: 'Hello World'
    }))
})

const port = process.env.PORT || 3000
const server = http.createServer(app)
server.listen(port)

module.exports = server