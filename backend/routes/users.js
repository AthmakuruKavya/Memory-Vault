const router = require('express').Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');
const upload = require('../middleware/upload');

// Update Profile with image upload
router.put('/profile', auth, upload.single('profilePicture'), userController.updateProfile);

module.exports = router;