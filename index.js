const express = require('express');

// importing env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

//import mongodb
require('./db/initMongoose');

//middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/create', (req, res) => {
  console.log(req.body);
});

// starting server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
