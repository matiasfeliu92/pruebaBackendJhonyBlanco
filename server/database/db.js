const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()

const sequelize = new Sequelize('prueba-backend-jhony', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(() => {
    console.log('CONEXION A LA BASE DE DATOS OK')
})
.catch(error => {
    console.log(error)
})

module.exports = sequelize