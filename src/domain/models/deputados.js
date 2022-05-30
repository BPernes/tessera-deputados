const mongoose = require('../../infrastructure/db/connection')

const deputadosSchema = new mongoose.Schema({
    dados: [{
        id: Number,
        uri: String,
        nome: String,
        siglaPartido: String,
        uriPartido: String,
        siglaUf: String,
        idLegislatura: Number,
        urlFoto: String,
        email: String
    }],
    links: [{
        rel: String,
        href: String
    }]
})

const Deputados = mongoose.model('Deputados', deputadosSchema)


module.exports = Deputados
