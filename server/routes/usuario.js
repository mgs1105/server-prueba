const express = require('express');
const app = express();

app.get('/usuario', (req, res) => {

    res.json({
        usuario: 'Usuarioss!!!'
    });

});

module.exports = app;