const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    featured: Boolean,
    features: [{
        name: String,
        description: String,
        image: String
    }],
    benefits: [{
        name: String,
        description: String,
        image: String,
    }],
    downloadURL: String,
    featureImage: String,
    callToAction: String,
});

module.exports = mongoose.model('Product', productSchema);