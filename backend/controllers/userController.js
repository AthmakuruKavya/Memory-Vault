const User = require('../models/User');

exports.updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const { username, aboutMe, hobbies, favoriteThings } = req.body;

        if (username) user.username = username;
        if (aboutMe !== undefined) user.aboutMe = aboutMe;
        if (hobbies !== undefined) user.hobbies = hobbies;
        if (favoriteThings !== undefined) user.favoriteThings = favoriteThings;

        // If a file was uploaded, update profile picture
        if (req.file) {
            user.profilePicture = req.file.path;
        }

        await user.save();

        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
            aboutMe: user.aboutMe,
            hobbies: user.hobbies,
            favoriteThings: user.favoriteThings
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};