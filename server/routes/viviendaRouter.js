const express = require('express')
const viviendaController = require('../controllers/controller')
const router = express.Router()

router.get('/', viviendaController.mostrarTodas)
router.get('/:id', viviendaController.mostrarPorID)
router.post('/crear', viviendaController.crear)
router.put('/actualizar/:id', viviendaController.actualizar)
router.delete('/eliminar/:id', viviendaController.eliminar)

module.exports = router