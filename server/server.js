const express = require('express')
const morgan = require('morgan')

const server = express()

server.set('port', process.env.PORT || 4000)

server.use(morgan('dev'))

server.use(express.urlencoded({extended: false}))
server.use(express.json())

server.listen(server.get('port'), () => {
    console.log("http://localhost:"+server.get('port'))
})