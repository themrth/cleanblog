const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const methodOverride = require('method-override');


// Controllers
const postControllers = require('./controllers/postController');
const pageControllers = require('./controllers/pageController');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}));

// Routes
app.get('/', postControllers.getAllPosts);
app.post('/posts', postControllers.createPost);
app.get('/posts/:id', postControllers.getPost);
app.put('/posts/:id', postControllers.updatePost);
app.delete('/posts/:id', postControllers.deletePost)
app.get('/about', pageControllers.aboutPage);
app.get('/post', pageControllers.postPage);
app.get('/add-post', pageControllers.addPostPage);
app.get('/posts/edit/:id', pageControllers.editPostPage);



// MongoDB Connection
mongoose.connect('mongodb+srv://themrth:rXjCke1QM4SODmZO@blog-app.s414qbb.mongodb.net/blog-app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Local Connection
const port = 3000;
app.listen(port, () => {
  console.log(`Server is starting on ${port}`);
});
