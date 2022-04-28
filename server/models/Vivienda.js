const sequelize = require('../database/db')
const {DataTypes} = require('sequelize')

const ViviendaModel = sequelize.define('casas', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    tipo: {type: DataTypes.STRING, null: false},
    superficie: {type: DataTypes.INTEGER, null: false},
    ubicacion: {type: DataTypes.STRING, null: false},
    precio: {type: DataTypes.INTEGER, null: false},
})

module.exports = ViviendaModel