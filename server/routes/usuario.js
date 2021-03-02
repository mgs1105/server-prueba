const express = require('express');
const app = express();
const _ = require('underscore');

var admin = require('firebase-admin');

var serviceAccount = require('../../canchas-3877a-firebase-adminsdk-x5ogm-b63cdfe8b1.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://canchas-3877a.firebaseio.com/'
})

database = admin.database();

app.get('/usuario', (req, res) => {

    database.ref('usuarios').once('value', (lista) => {
        const data = lista.val();
        res.json({
            usuarios: data
        })
    });


});

app.post('/usuario', (req, res) => {

    const usuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        numero: req.body.numero,
        google: req.body.google
    };

    database.ref('usuarios').push(usuario);

    res.json({
        persona: usuario
    });

});

module.exports = app;