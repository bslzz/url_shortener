const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clickCount: {
    type: Number,
  },
});

module.exports = mongoose.model('UrlModel', UrlSchema);
