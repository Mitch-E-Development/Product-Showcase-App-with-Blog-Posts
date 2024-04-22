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

// router.get('/posts', async (req, res) => {
//     try {
//         let query = Post.find();

//         // Apply filtering based on category
//         if (req.query.filterBy) {
//             query = query.where('category').equals(req.query.filterBy);
//         }

//         // Apply sorting based on sortBy parameter
//         if (req.query.sortBy) {
//             query = query.sort({ createdAt: req.query.sortBy });
//         }

//         const posts = await query.exec();
//         res.json(posts);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


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