// Porta onde o servidor irá rodar.
const port = 3003;

// Biblioteca para converter (parser) dos dados do body das requisições.
const bodyParse = require("body-parser");
// // Biblioteca que roda o servidor.
const express = require("express");
// Criando o servidor.
const server = express();

// Criando middleware para recebimento de dados via url e json.
server.use(bodyParse.urlencoded({ extended: true }));
server.use(bodyParse.json());

// Iniciando o servirdor.
server.listen(port, () => console.log(`Servidor escutando a porta ${port}`));
