const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    features: Array,
    downloadURL: String,
    media: Array,   
});

module.exports = mongoose.model('Product', productSchema);