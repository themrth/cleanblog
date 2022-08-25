const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
  res.render('../views/main.ejs');
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

module.exports = router;
