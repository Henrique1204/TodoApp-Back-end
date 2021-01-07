// Carregando server.
const server = require("./config/server.js");
// Carregando banco de dados.
require("./config/database.js");
// Carregando as rotas da API.
const routes = require("./config/routes.js");
routes(server);
