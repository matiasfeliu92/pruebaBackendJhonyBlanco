const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
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