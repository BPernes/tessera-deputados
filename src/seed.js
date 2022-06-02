const Deputados = require('./domain/models/deputados');
const {dados} = require('./infrastructure/mock/response_deputados.json')

const populateDeputados = async () => {
    await Deputados.insertMany(dados)
        .then(res => {
            consoloe.log(res)
        })
        .catch(err => {
            console.log(err);
        })
}

populateDeputados()
