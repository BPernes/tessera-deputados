const mongoose = require('mongoose');
const { MONGO_URL } = require('../../../config/config')

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected!')
})


module.exports = mongoose