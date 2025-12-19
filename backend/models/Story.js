const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    image: { type: String, required: true }, // Storing Base64 for simplicity
    date: { type: Date, required: true },
    description: { type: String },
    location: { type: String },
    isFavorite: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

// Helper to format response if needed, but standard JSON is fine
StorySchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
    }
});

module.exports = mongoose.model('Story', StorySchema);