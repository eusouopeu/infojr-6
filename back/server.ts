import { updatePrecoPao } from './controllers/PrecoController';
import { addCliente, getClientes, deleteCliente, getEstatisticas } from './controllers/FilaController';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4001;

// Middleware para permitir requisições de diferentes origens
app.use(cors());

app.use(bodyParser.json());

// Rotas relacionadas ao preço do pão
app.post('/precoPao', updatePrecoPao);

// Rotas relacionadas à fila de clientes
app.post('/addCliente', addCliente);
app.get('/', getClientes);
app.delete('/deleteCliente/:id', deleteCliente);

// Rota para acessar as estatísticas
app.get('/estatisticas', getEstatisticas);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
