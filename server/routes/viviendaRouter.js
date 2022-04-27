const express = require('express')
const viviendaController = require('../controllers/controller')
const router = express.Router()

router.get('/', viviendaController.mostrarTodas)
router.get('/:id', viviendaController.mostrarPorID)
router.get('/mayoresDe100m2', viviendaController.mostrarMayoresA100M2)
router.get('/menoresDe100m2', viviendaController.mostrarMenoresA100M2)
router.post('/crear', viviendaController.crear)
router.put('/actualizar/:id', viviendaController.actualizar)

module.exports = router