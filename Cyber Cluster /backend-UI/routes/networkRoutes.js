// backend-UI/routes/networkRoutes.js
const express = require('express');
const { getNetworkConfig, getEthernetTraffic, getInteractionsData } = require('../controllers/networkController');
const router = express.Router();

router.get('/config', getNetworkConfig);
router.get('/traffic', getEthernetTraffic);
router.get('/interactions', getInteractionsData);

module.exports = router;
