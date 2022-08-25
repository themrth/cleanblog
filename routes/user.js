const express = require('express');
const router = express.Router();

// MODELS
const Post = require('../models/Post');


// Routes
router.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.render('../views/main.ejs', {
    posts
  });
});

router.get('/about', (req, res) => {
  res.render('../views/about.ejs');
});

router.get('/post', (req, res) => {
  res.render('../views/post.ejs');
});

router.get('/add-post', (req, res) => {
  res.render('../views/add_post.ejs');
});

router.post('/posts', async (req,res) => {
  await Post.create(req.body)
  res.redirect('/')
})

module.exports = router;
