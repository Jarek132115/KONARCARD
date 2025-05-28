const { hashPassword, comparePassword } = require('../helpers/auth');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Test route
const test = (req, res) => {
  res.json('test is working');
};

// Register
const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, age, bio } = req.body;

    if (!name) return res.json({ error: 'Name is required' });
    if (!email) return res.json({ error: 'Email is required' });
    if (!password || password.length < 8)
      return res.json({ error: 'Password must be at least 8 characters' });
    if (password !== confirmPassword)
      return res.json({ error: 'Passwords do not match' });

    const exist = await User.findOne({ email });
    if (exist) return res.json({ error: 'Email is already taken' });

    const hashedPassword = await hashPassword(password);
    const user = await User.create({ name, email, password: hashedPassword, age, bio });

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Registration failed. Try again.' });
  }
};

// Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.json({ error: 'No user found' });
    const match = await comparePassword(password, user.password);

    if (match) {
      jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json(user);
      });
    } else {
      res.json({ error: 'Passwords do not match' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Login failed' });
  }
};

// Get profile
const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) return res.status(401).json({ error: 'Token invalid' });
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

// Logout
const logoutUser = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
};

// CRUD operations
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
