// Biblioteca que acessa o banco de dados do mongo.
const mongoose = require("mongoose");
// Definindo a API de Promises do mongoose sendo a padrão do node.
mongoose.Promise = global.Promise;

// Exportando a conexão com o banco de dados.
module.exports = mongoose.connect("mongodb://localhost/todo");
