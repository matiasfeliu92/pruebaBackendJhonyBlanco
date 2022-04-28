const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const server = express()

server.use(morgan('dev'))

server.use(cors())

server.use(express.urlencoded({extended: false}))
server.use(express.json())

server.use('/viviendas', require('./routes/viviendaRouter'))

server.listen(4000, () => {
    console.log("http://localhost:4000")
})