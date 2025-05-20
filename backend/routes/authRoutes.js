const express = require('express');
const passport = require('passport');
const {
    test,
    registerUser,
    loginUser,
    getProfile,
    logoutUser
} = require('../controllers/authController');

const router = express.Router();

// Local auth routes
router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.post('/logout', logoutUser);

// Google OAuth
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: 'http://localhost:5173/login',
    session: true
}), (req, res) => {
    res.redirect('http://localhost:5173/myprofile');
});

module.exports = router;
