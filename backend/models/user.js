const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    googleId: String,
    avatar: String,
});

module.exports = mongoose.model('User', userSchema);
