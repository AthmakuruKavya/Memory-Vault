const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validation
        if (!username || !email || !password)
            return res.status(400).json({ message: 'Not all fields have been entered.' });

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: 'An account with this email already exists.' });

        // Hash password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const savedUser = await newUser.save();

        // Sign Token
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '2d' });

        res.json({
            token,
            user: {
                id: savedUser._id,
                username: savedUser.username,
                email: savedUser.email,
                profilePicture: savedUser.profilePicture
            }
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ message: 'Not all fields have been entered.' });

        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: 'No account with this email has been registered.' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: 'Invalid credentials.' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '2d' });

        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profilePicture: user.profilePicture,
                aboutMe: user.aboutMe,
                hobbies: user.hobbies,
                favoriteThings: user.favoriteThings
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};