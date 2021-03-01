require('./config/config');

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log('Corriendo el servidor en puerto:', process.env.PORT);
});