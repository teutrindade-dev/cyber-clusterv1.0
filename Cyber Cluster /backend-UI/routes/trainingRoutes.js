// trainingRoutes.js
const express = require('express');
const { getTrainingData, saveTrainingConfig } = require('../controllers/trainingController');
const router = express.Router();

router.get('/', getTrainingData);
router.post('/', saveTrainingConfig);

module.exports = router;
