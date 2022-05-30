const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const { PORT } = require('../config/config');

const router = require('./routes/routes')

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))

app.use('/api', router);


app.listen(PORT || 3000, () => {
    console.log(`Server Running at ${PORT}!`);
})