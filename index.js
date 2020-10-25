const express = require('express');

// importing env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

//middleware
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

// starting server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
