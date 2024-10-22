// backend-UI/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Importando rotas
const cybersecurityRoutes = require('./routes/cybersecurityRoutes');
const domainRoutes = require('./routes/domainRoutes');
const networkRoutes = require('./routes/networkRoutes');
const trainingRoutes = require('./routes/trainingRoutes');
const userRoutes = require('./routes/userRoutes');

// Inicializando o app Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api/cybersecurity', cybersecurityRoutes);
app.use('/api/domains', domainRoutes);
app.use('/api/network', networkRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/users', userRoutes);

// Servidor ouvindo na porta 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
