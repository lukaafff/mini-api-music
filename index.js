const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

const musicas = require('./src/data/musicas.json');

server.get('/musicas', (req, res) =>{
    return res.json(musicas);
});

server.listen(port, () => {
    console.log("Servidor está funcionando...");
});