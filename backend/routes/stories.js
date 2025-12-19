const router = require('express').Router();
const auth = require('../middleware/auth');
const storyController = require('../controllers/storyController');
const upload = require('../middleware/upload');

// Get all stories for logged in user
router.get('/', auth, storyController.getAllStories);

// Get favorite stories
router.get('/favorites', auth, storyController.getFavoriteStories);

// Get single story
router.get('/:id', auth, storyController.getStoryById);

// Create story (with image upload)
router.post('/', auth, upload.single('image'), storyController.createStory);

// Update story (with optional image upload)
router.put('/:id', auth, upload.single('image'), storyController.updateStory);

// Delete story
router.delete('/:id', auth, storyController.deleteStory);

// Toggle favorite
router.put('/:id/favorite', auth, storyController.toggleFavorite);

module.exports = router;