const express = require('express');
const server = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

server.use(cors());

const musicas = require('./src/data/musicas.json');

server.get('/musicas', (req, res) =>{
    return res.json(musicas);
});

server.listen(port, () => {
    console.log("Servidor está funcionando...");
});