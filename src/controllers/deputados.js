const Deputados = require('../domain/models/deputados')

exports.getAll = async (req, res) => {
    await Deputados.find({}).then((Deputados) => {
        res.send(Deputados);
    })
}

exports.getByName = async (req, res) => {
    const { nome } = req.params;
    const deputado = await Deputados.find({ nome }).exec()
    res.send(deputado)
}

exports.getBySiglaUf = async (req, res) => {
    const { siglaUf } = req.params;
    const deputados = await Deputados.find({ siglaUf }).exec()
    res.send(deputados)
}

exports.getBySiglaPartido = async (req, res) => {
    const { siglaPartido } = req.params;
    const deputados = await Deputados.find({ siglaPartido }).exec()
    res.send(deputados)
}