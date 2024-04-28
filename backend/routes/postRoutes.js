const express = require('express');
const {getPosts, getPost, createPost} = require('../controllers/postControllers')

const router = express.Router();


// route for getting all posts
router.get('/posts', getPosts);

//route for getting a single post
router.get('/posts/:id', getPost);

// route for creating a new post
router.post('/posts', createPost);

module.exports = router;