const express = require('express')
const router = express.Router()

const controller = require('../controllers/deputados')

router.get('/deputados', controller.getAll)

router.get('/deputados/nome/:nome', controller.getByName);

router.get('/deputados/siglaUf/:siglaUf', controller.getBySiglaUf);

router.get('/deputados/siglaPartido/:siglaPartido', controller.getBySiglaPartido);

module.exports = router