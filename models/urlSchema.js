const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },

  shortUrl: {
    type: String,
    required: true,
    unique: true,
    maxlength: 6,
  },

  clickCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('UrlModel', UrlSchema);
