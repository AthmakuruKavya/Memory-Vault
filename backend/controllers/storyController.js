// const Story = require('../models/Story');

// exports.getAllStories = async (req, res) => {
//     try {
//         const stories = await Story.find({ userId: req.user }).sort({ date: -1 });
//         res.json(stories);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.getFavoriteStories = async (req, res) => {
//     try {
//         const stories = await Story.find({ userId: req.user, isFavorite: true }).sort({ date: -1 });
//         res.json(stories);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.getOnThisDayStories = async (req, res) => {
//     try {
//         const today = new Date();
//         const month = today.getMonth() + 1; // MongoDB months are 1-12
//         const day = today.getDate();
//         const year = today.getFullYear();

//         const stories = await Story.find({
//             userId: req.user,
//             $expr: {
//                 $and: [
//                     { $eq: [{ $dayOfMonth: '$date' }, day] },
//                     { $eq: [{ $month: '$date' }, month] },
//                     { $lt: [{ $year: '$date' }, year] } // Only past years
//                 ]
//             }
//         });
        
//         res.json(stories);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.getStoryById = async (req, res) => {
//     try {
//         const story = await Story.findOne({ _id: req.params.id, userId: req.user });
//         if (!story) return res.status(404).json({ message: 'Story not found' });
//         res.json(story);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.createStory = async (req, res) => {
//     try {
//         const { title, date, description, location } = req.body;
        
//         // req.file.path contains the Cloudinary URL
//         if (!req.file) {
//             return res.status(400).json({ message: 'Image is required' });
//         }

//         const newStory = new Story({
//             userId: req.user,
//             title,
//             image: req.file.path, 
//             date,
//             description,
//             location
//         });

//         const savedStory = await newStory.save();
//         res.json(savedStory);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.updateStory = async (req, res) => {
//     try {
//         const story = await Story.findOne({ _id: req.params.id, userId: req.user });
//         if (!story) return res.status(404).json({ message: 'Story not found' });

//         const { title, date, description, location, isFavorite } = req.body;
        
//         if (title) story.title = title;
//         if (date) story.date = date;
//         if (description !== undefined) story.description = description;
//         if (location !== undefined) story.location = location;
//         if (isFavorite !== undefined) story.isFavorite = isFavorite === 'true' || isFavorite === true; // Handle formData string conversion

//         // If a new file is uploaded, update the image URL
//         if (req.file) {
//             story.image = req.file.path;
//         }

//         const updatedStory = await story.save();
//         res.json(updatedStory);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.deleteStory = async (req, res) => {
//     try {
//         const story = await Story.findOne({ _id: req.params.id, userId: req.user });
//         if (!story) return res.status(404).json({ message: 'Story not found' });

//         await Story.deleteOne({ _id: req.params.id });
//         res.json({ message: 'Story deleted' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.toggleFavorite = async (req, res) => {
//     try {
//         const story = await Story.findOne({ _id: req.params.id, userId: req.user });
//         if (!story) return res.status(404).json({ message: 'Story not found' });

//         story.isFavorite = !story.isFavorite;
//         const updatedStory = await story.save();
//         res.json(updatedStory);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

const Story = require('../models/Story');

exports.getAllStories = async (req, res) => {
    try {
        // Sort by Date (newest first), then by CreatedAt (newest first) for same-day entries
        const stories = await Story.find({ userId: req.user }).sort({ date: -1, createdAt: -1 });
        res.json(stories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getFavoriteStories = async (req, res) => {
    try {
        const stories = await Story.find({ userId: req.user, isFavorite: true }).sort({ date: -1, createdAt: -1 });
        res.json(stories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getOnThisDayStories = async (req, res) => {
    try {
        const today = new Date();
        const month = today.getMonth() + 1; // MongoDB months are 1-12
        const day = today.getDate();
        const year = today.getFullYear();

        const stories = await Story.find({
            userId: req.user,
            $expr: {
                $and: [
                    { $eq: [{ $dayOfMonth: '$date' }, day] },
                    { $eq: [{ $month: '$date' }, month] },
                    { $lt: [{ $year: '$date' }, year] } // Only past years
                ]
            }
        }).sort({ date: -1 }); // Sort On This Day by year descending
        
        res.json(stories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getStoryById = async (req, res) => {
    try {
        const story = await Story.findOne({ _id: req.params.id, userId: req.user });
        if (!story) return res.status(404).json({ message: 'Story not found' });
        res.json(story);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createStory = async (req, res) => {
    try {
        const { title, date, description, location } = req.body;
        
        // req.file.path contains the Cloudinary URL
        if (!req.file) {
            return res.status(400).json({ message: 'Image is required' });
        }

        const newStory = new Story({
            userId: req.user,
            title,
            image: req.file.path, 
            date,
            description,
            location
        });

        const savedStory = await newStory.save();
        res.json(savedStory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateStory = async (req, res) => {
    try {
        const story = await Story.findOne({ _id: req.params.id, userId: req.user });
        if (!story) return res.status(404).json({ message: 'Story not found' });

        const { title, date, description, location, isFavorite } = req.body;
        
        if (title) story.title = title;
        if (date) story.date = date;
        if (description !== undefined) story.description = description;
        if (location !== undefined) story.location = location;
        if (isFavorite !== undefined) story.isFavorite = isFavorite === 'true' || isFavorite === true; // Handle formData string conversion

        // If a new file is uploaded, update the image URL
        if (req.file) {
            story.image = req.file.path;
        }

        const updatedStory = await story.save();
        res.json(updatedStory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteStory = async (req, res) => {
    try {
        const story = await Story.findOne({ _id: req.params.id, userId: req.user });
        if (!story) return res.status(404).json({ message: 'Story not found' });

        await Story.deleteOne({ _id: req.params.id });
        res.json({ message: 'Story deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.toggleFavorite = async (req, res) => {
    try {
        const story = await Story.findOne({ _id: req.params.id, userId: req.user });
        if (!story) return res.status(404).json({ message: 'Story not found' });

        story.isFavorite = !story.isFavorite;
        const updatedStory = await story.save();
        res.json(updatedStory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};