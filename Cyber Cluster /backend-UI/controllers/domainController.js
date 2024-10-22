// domainController.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../database/domains.json');

const getDomains = (req, res) => {
  const data = fs.readFileSync(filePath);
  res.json(JSON.parse(data));
};

const saveDomain = (req, res) => {
  const newDomain = req.body;
  const data = fs.readFileSync(filePath);
  const domains = JSON.parse(data);
  domains.push(newDomain);
  fs.writeFileSync(filePath, JSON.stringify(domains, null, 2));
  res.json({ message: 'Domínio salvo com sucesso!' });
};

module.exports = { getDomains, saveDomain };
