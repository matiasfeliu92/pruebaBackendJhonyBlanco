const sequelize = require('../database/db')
const {DataTypes} = require('sequelize')

const ViviendaModel = sequelize.define('casas', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    tipo: {type: DataTypes.STRING},
    superficie: {type: DataTypes.INTEGER},
    ubicacion: {type: DataTypes.STRING},
    precio: {type: DataTypes.INTEGER},
})

module.exports = ViviendaModel