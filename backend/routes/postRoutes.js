const express = require('express');
const Post= require('../models/postModel');

const router = express.Router();


// route for getting all posts
router.get('/posts', async (req,res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

//route for getting a single post
router.get('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(post);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// route for creating a new post
router.post('/posts', async (req, res) => {
    try{
        const newPost = new Post(req.body);
        await newPost.save();
        res.json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;