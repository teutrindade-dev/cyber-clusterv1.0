const User = require('../models/User');

// Register a new user
exports.register = async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });

  try {
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user' });
  }
};

// Get user profile
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

// Update user profile
exports.updateProfile = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findById(req.user.id);

  if (email) user.email = email;
  if (password) user.password = password;

  try {
    await user.save();
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error updating profile' });
  }
};