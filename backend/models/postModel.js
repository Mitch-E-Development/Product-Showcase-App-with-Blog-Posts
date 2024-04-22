const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        category: String,
        content: String,
        media: Array, 
    }, 
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('Post', postSchema);
