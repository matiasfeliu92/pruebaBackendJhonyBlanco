const db = require('../database/db')
const {DataTypes} = require('sequelize')

const ViviendaModel = db.define('viviendas', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, null: false},
    tipo: {type: DataTypes.STRING, null: false},
    superficie: {type: DataTypes.INTEGER, null: false},
    ubicacion: {type: DataTypes.STRING},
    precio: {type: DataTypes.INTEGER, null: false},
})

module.exports = ViviendaModel