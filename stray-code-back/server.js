const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const loginRoute = require('./src/routes/loginRoute');
const questionarioRoute = require('./src/routes/questionarioRoute');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

dotenv.config();

const { MONGO_URI, MONGO_URI_LOCAL } = process.env;

let url = MONGO_URI_LOCAL;
let mongodb = MONGO_URI_LOCAL || url;

mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar com a base de dados'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extendde: false }));
app.use('api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(loginRoute);
app.use(questionarioRoute);

const port = 3003;
const server = app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Documentação disponível em: https://localhost:3003/api-docs`);
});

module.exports = server;
