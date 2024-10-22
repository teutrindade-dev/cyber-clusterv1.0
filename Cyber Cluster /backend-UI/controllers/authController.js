const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const User = require('../models/User'); // Assuming you have a User model

// Generate 2FA secret and QR code
exports.generate2FA = async (req, res) => {
  const secret = speakeasy.generateSecret({ length: 20 });
  const user = await User.findById(req.user.id);

  user.twoFactorSecret = secret.base32;
  await user.save();

  qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
    if (err) return res.status(500).json({ error: 'Error generating QR code' });
    res.json({ qrCode: data_url, secret: secret.base32 });
  });
};

// Verify 2FA token
exports.verify2FA = async (req, res) => {
  const { token } = req.body;
  const user = await User.findById(req.user.id);

  const verified = speakeasy.totp.verify({
    secret: user.twoFactorSecret,
    encoding: 'base32',
    token
  });

  if (verified) {
    user.isTwoFactorAuthenticated = true;
    await user.save();
    res.json({ success: true });
  } else {
    res.status(400).json({ error: 'Invalid token' });
  }
};

// User login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  if (user.isTwoFactorEnabled && !user.isTwoFactorAuthenticated) {
    return res.status(401).json({ error: '2FA required' });
  }

  const token = user.generateAuthToken();
  res.json({ token });
};