const express = require("express");

module.exports = (server) => {
    // Define a rota para acessar a API.
    const router = express.Router();
    server.use("/api", router);

    // Define a rota para acessar os dados.
    const todoService = require("../api/todo/todoService.js");
    todoService.register(router, "/todo");
};
