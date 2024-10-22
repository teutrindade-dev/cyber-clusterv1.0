const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware'); // Assuming you have an auth middleware

router.post('/generate-2fa', authenticate, authController.generate2FA);
router.post('/verify-2fa', authenticate, authController.verify2FA);
router.post('/login', authController.login);

module.exports = router;