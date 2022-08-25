const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const router = express.Router();
const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.set('views', './views');
app.set('view engine', 'ejs');

// Routes
const userRoutes = require('./routes/user');
app.use(userRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost/cleanblog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})



// Local Connection
const port = 3000;
app.listen(port, () => {
  console.log(`Server is starting on ${port}`);
});
