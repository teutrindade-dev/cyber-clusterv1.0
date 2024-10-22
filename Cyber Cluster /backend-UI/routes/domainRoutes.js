// domainRoutes.js
const express = require('express');
const { getDomains, saveDomain } = require('../controllers/domainController');
const router = express.Router();

router.get('/', getDomains);
router.post('/', saveDomain);

module.exports = router;
