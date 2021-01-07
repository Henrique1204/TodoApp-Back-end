// Porta onde o servidor irá rodar.
const port = 3003;

// Biblioteca para converter (parser) dos dados do body das requisições.
const bodyParse = require("body-parser");
// // Biblioteca que roda o servidor.
const express = require("express");
// Criando o servidor.
const server = express();
// Importando o middleware para permitir o cors.
const allowCors = require("./cors.js");

// Utilizando middleware para recebimento de dados via url e json.
server.use(bodyParse.urlencoded({ extended: true }));
server.use(bodyParse.json());
// Utilizando middleware para permissão do cors.
server.use(allowCors);

// Iniciando o servirdor.
server.listen(port, () => console.log(`Servidor escutando a porta ${port}`));

module.exports = server;
