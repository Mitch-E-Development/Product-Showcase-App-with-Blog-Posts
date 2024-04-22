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