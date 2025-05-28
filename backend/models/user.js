const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Required for non-Google users
  googleId: { type: String },
  avatar: { type: String },
  age: { type: Number },
  bio: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
