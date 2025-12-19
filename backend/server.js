const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json({ limit: '50mb' })); // Increased limit for base64 images

// Routes
const authRoutes = require('./routes/auth');
const storyRoutes = require('./routes/stories');
const userRoutes = require('./routes/users');

app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/users', userRoutes);

// Health Check
app.get('/', (req, res) => {
    res.send('Memory Vault API is running');
});

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/memory_vault', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});