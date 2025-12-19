const router = require('express').Router();
const authController = require('../controllers/authController');

// Register
router.post('/signup', authController.signup);

// Login
router.post('/login', authController.login);

module.exports = router;