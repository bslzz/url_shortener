const express = require('express');

// importing env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//import mongodb
require('./db/initMongoose');

//middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/', require('./routes/urlRoute'));

// starting server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
