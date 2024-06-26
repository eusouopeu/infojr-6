"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrecoController_1 = require("./controllers/PrecoController");
const FilaController_1 = require("./controllers/FilaController");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4001;
// Middleware para permitir requisições de diferentes origens
app.use(cors());
app.use(bodyParser.json());
// Rotas relacionadas ao preço do pão
app.post('/precoPao', PrecoController_1.updatePrecoPao);
// Rotas relacionadas à fila de clientes
app.post('/addCliente', FilaController_1.addCliente);
app.get('/', FilaController_1.getClientes);
app.delete('/deleteCliente/:id', FilaController_1.deleteCliente);
// Rota para acessar as estatísticas
app.get('/estatisticas', FilaController_1.getEstatisticas);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
