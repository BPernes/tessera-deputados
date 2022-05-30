const Deputados = require('../../domain/models/deputados')

const insert = async (deputados) => {
    const deputadosModel = new Deputados(deputados)
    const newDeputado = await deputadosModel.save()

    return newDeputado
}

module.exports = {
    insert
}