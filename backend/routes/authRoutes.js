const express = require('express');
const passport = require('passport');
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const serviceController = require('../controllers/serviceController');
const workController = require('../controllers/workController');
const reviewController = require('../controllers/reviewController');

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


// User CRUD Routes
router.get('/get_users', getAllUsers);
router.get('/user_profile/:id', getUserById);
router.post('/edit_profile/:id', updateUser);
router.post('/delete_profile/:id', deleteUser);

// Service CRUD Routes
router.post('/create_service', serviceController.createService);
router.get('/get_all_services', serviceController.getAllServices);
router.get('/get_service/:userid', serviceController.getServiceByUserId);
router.post('/update_service/:id', serviceController.updateService);
router.post('/delete_service/:id', serviceController.deleteService);

// work CRUD Routes
router.post('/create_work', workController.createWork);
router.get('/get_all_works', workController.getAllWorks);
router.get('/get_work/:userid', workController.getWorkByUserId);
router.post('/update_work/:id', workController.updateWork);
router.post('/delete_work/:id', workController.deleteWork);

// review CRUD Routes
router.post('/create_review', reviewController.createReview);
router.get('/get_all_reviews', reviewController.getAllReviews);
router.get('/get_review/:userid', reviewController.getReviewsByUserId);
router.post('/update_review/:id', reviewController.updateReview);
router.post('/delete_review/:id', reviewController.deleteReview);


module.exports = router;
