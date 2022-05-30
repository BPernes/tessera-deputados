const express = require('express')
const router = express.Router()

const controller = require('../controllers/deputados')

router.get('/populateDB', controller.populateDeputadosDB);

module.exports = router