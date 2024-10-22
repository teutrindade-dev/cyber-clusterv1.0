// cybersecurityRoutes.js
const express = require('express');
const { getSecurityLogs, saveSecurityLog } = require('../controllers/cybersecurityController');
const router = express.Router();

router.get('/', getSecurityLogs);
router.post('/', saveSecurityLog);

module.exports = router;
