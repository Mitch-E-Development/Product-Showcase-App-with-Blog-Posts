const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: String,
        subtitle: String,
        author: String,
        category: String,
        featureImage: String,
        content: {
            intro: {
                heading: String,
                text: String
            },
            sections: [{
                heading: String,
                text: String,
                image: String // Add image property to each section
            }],
            conclusion: {
                heading: String,
                text: String
            }
        },       
    }, 
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('Post', postSchema);
