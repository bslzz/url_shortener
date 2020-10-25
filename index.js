const express = require('express');

// importing env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// starting server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
