// cybersecurityController.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../database/cybersecurityLogs.json');

const getSecurityLogs = (req, res) => {
  const data = fs.readFileSync(filePath);
  res.json(JSON.parse(data));
};

const saveSecurityLog = (req, res) => {
  const newLog = req.body;
  const data = fs.readFileSync(filePath);
  const logs = JSON.parse(data);
  logs.push(newLog);
  fs.writeFileSync(filePath, JSON.stringify(logs, null, 2));
  res.json({ message: 'Log de segurança salvo com sucesso!' });
};

module.exports = { getSecurityLogs, saveSecurityLog };
