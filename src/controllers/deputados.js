const Deputados = require('../domain/models/deputados')

exports.getAll = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    await Deputados.find({}).then((Deputados) => {
        res.send(Deputados);
    })
}

exports.getByName = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const { nome } = req.params;
    const deputado = await Deputados.find({ nome }).exec()
    res.send(deputado)
}

exports.getBySiglaUf = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const { siglaUf } = req.params;
    const deputados = await Deputados.find({ siglaUf }).exec()
    res.send(deputados)
}

exports.getBySiglaPartido = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const { siglaPartido } = req.params;
    const deputados = await Deputados.find({ siglaPartido }).exec()
    res.send(deputados)
}