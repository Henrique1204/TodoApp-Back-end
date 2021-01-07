// Biblioteca para criação da API.
const restful = require("node-restful");
// Utilizando o mongoose do restful.
const mongoose = restful.mongoose;

// Mapeando a estrutura do banco de dados.
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
});

// Exportando o modelo do banco de dados.
module.exports = restful.model("Todo", todoSchema);
