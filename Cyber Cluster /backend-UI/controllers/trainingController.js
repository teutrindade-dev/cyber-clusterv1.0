// trainingController.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../database/trainingData.json');

const getTrainingData = (req, res) => {
  const data = fs.readFileSync(filePath);
  res.json(JSON.parse(data));
};

const saveTrainingConfig = (req, res) => {
  const newConfig = req.body;
  fs.writeFileSync(filePath, JSON.stringify(newConfig, null, 2));
  res.json({ message: 'Configuração de treinamento salva com sucesso!' });
};

module.exports = { getTrainingData, saveTrainingConfig };
