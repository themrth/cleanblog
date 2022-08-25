const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));
app.set('views', './views');
app.set('view engine', 'ejs');

// Routes
const userRoutes = require('./routes/user');
app.use(userRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is starting on ${port}`);
});
