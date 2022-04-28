const ViviendaModel = require('../models/Vivienda')
const {Op} = require('sequelize')

const viviendaController = {

    mostrarTodas: async(req, res) => {
        const viviendas = await ViviendaModel.findAll({attributes: ['id', 'tipo', 'superficie', 'precio', 'ubicacion', 'imagen']})
        if(viviendas) {
            res.status(200).json(viviendas)
            console.log(viviendas)
        } else {
            res.status(403).json({message: 'no existen viviendas registradas'})
        }
    },

    mostrarPorID: async(req, res) => {
        const id = req.params.id
        const vivienda = await ViviendaModel.findOne({where: {id: id}, attributes: ['id', 'tipo', 'superficie', 'precio', 'ubicacion', 'imagen']})
        if (vivienda) {
            res.status(200).json(vivienda)
        } else {
            res.status(403).json({message: 'no existe la vivienda deseada'})
        }
    },

    crear: async(req, res) => {
        try {
            const vivienda = await ViviendaModel.create(req.body)
            res.status(200).json(vivienda)
        } catch (error) {
            res.json({message: `${error.parent.sqlMessage}`, status: 403})
        }
    },

    actualizar: async(req, res) => {
        const id = req.params.id
        const vivienda = await ViviendaModel.findOne({where: {id: id}})
        if (vivienda) {
            const viviendaActualizada = await ViviendaModel.update(req.body, {where: {id: id}})
            res.status(200).json(viviendaActualizada)
        } else {
            res.status(403).json({message: 'no se pudo actualizar la vivienda'})
        }
    }, 

    eliminar: async(req, res) => {
        const id = req.params.id
        const vivienda = await ViviendaModel.findOne({where:{id: id}})
        if (vivienda) {
            const vivienda = await ViviendaModel.destroy({where:{id: id}})
            res.status(200).json(vivienda)
        } else {
            res.status(403).json({message: 'no se pudo eliminar la vivienda seleccionada'})
        }
    }
    
}

module.exports = viviendaController