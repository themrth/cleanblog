const Post = require('../models/Post');

exports.aboutPage = (req, res) => {
  res.render('about.ejs');
};

exports.postPage = (req, res) => {
  res.render('post.ejs');
};

exports.addPostPage = (req, res) => {
  res.render('add_post.ejs');
};

exports.editPostPage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit_post.ejs', {
    post,
  });
};
