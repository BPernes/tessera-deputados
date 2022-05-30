const axios = require('axios')
const deputadosRepository = require('../infrastructure/db/deputadosRepository')

exports.populateDeputadosDB = async (req, res) => {
    try {
        const res = await axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados?itens=100&ordem=ASC&ordenarPor=nome')
        const deputados = await JSON.parse(res.data)

        console.log(res);
        console.log('');
        console.log('------------');
        console.log('');
        console.log(deputados);

        const newDeputado = await deputadosRepository.insert(deputados)
        res.json({
            msg: 'Sucesso!!',
            deputado: newDeputado
        })
    }
    catch (err) {
        console.log(err)
    }
}