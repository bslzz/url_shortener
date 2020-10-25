const express = require('express');
const router = express.Router();
const UrlModel = require('../models/urlSchema');

router.post('/', async (req, res) => {
  try {
    let urlShort = await new UrlModel({
      longUrl: req.body.longurl,
      shortUrl: generateShortUrl(),
    });
    await urlShort.save((err, data) => {
      if (err) throw err;
      console.log(data);
      res.redirect('/');
    });
  } catch (error) {
    res.status(500).json({ msg: `${error.message}` });
  }
});

const generateShortUrl = () => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result);
  return result;
};

module.exports = router;
