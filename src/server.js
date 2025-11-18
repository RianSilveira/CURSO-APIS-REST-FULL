"use strict";
/* import express from 'express';

const app = express();

const PORT = 3000;

app.get('/products/:id/:user', (req, res) => {
    const { id, user } = req.params

    res.send(`Produto solicitado: ${id} do usuario ${user}`);
  
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/products', (req, res) => {
    const { page, limit } = req.query;
    res.send(`pagina: ${page} de ${limit}`);
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
