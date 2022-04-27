const ViviendaModel = require('../models/Vivienda')

const viviendaController = {

    mostrarTodas: async(req, res) => {
        const viviendas = await ViviendaModel.findAll()
        if(viviendas) {
            res.status(200).json(viviendas)
        } else {
            res.status(403).json({message: 'no existen viviendas registradas'})
        }
    },

    mostrarPorID: async(req, res) => {
        const id = req.params.id
        const vivienda = await ViviendaModel.findOne({where: {id: id}})
        if (vivienda) {
            res.status(200).json(vivienda)
        } else {
            res.json({message: 'no existe la vivienda deseada', status: 403})
        }
    },

    mostrarMayoresA100M2: async(req, res) => {
        const superficie = req.params.superficie
        const vivienda = await ViviendaModel.findAll({where: {superficie: { [Op.gte]: 100 }}})
        if(vivienda) {
            res.status(200).json(vivienda)
        } else {
            res.json({message: 'no existen viviendas de mas de 100m2', status: 403})
        }
    },

    mostrarMenoresA100M2: async(req, res) => {
        const superficie = req.params.superficie
        const vivienda = await ViviendaModel.findAll({where: {superficie: { [Op.lte]: 100 }}})
        if(vivienda) {
            res.status(200).json(vivienda)
        } else {
            res.json({message: 'no existen viviendas de menos de 100m2', status: 403})
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
            res.json({message: 'no se pudo actualizar la vivienda', status: 403})
        }
    }
    
}

module.exports = viviendaController