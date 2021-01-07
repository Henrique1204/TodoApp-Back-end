// Importando o modelo do banco de dados.
const Todo = require("./todo.js");

// Habilitando os métodos que serão usados na API.
Todo.methods(["get", "post", "put", "delete"]);
// Definido que ao atualizar um dado ele deverá retornar o dado atualizado...
// ... e aplicará as mesmas validações de criação.
Todo.updateOptions({ new: true, runValidators: true });

// Exportando a API configurada.
module.exports = Todo;
