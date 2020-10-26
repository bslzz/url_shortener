const UrlModel = require('../models/urlSchema');

module.exports = {
  // get all URLs from the db
  getAllUrls: async (req, res) => {
    try {
      await UrlModel.find((err, data) => {
        if (err) throw err;
        res.render('home', {
          urlResult: data,
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  //post new URL
  postNewUrl: async (req, res) => {
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
  },

  // link to the main url from shortURL
  shortLink: async (req, res) => {
    try {
      const shortUrlRedirect = await UrlModel.findOne({
        shortUrl: req.params.urlId,
      });
      res.redirect(shortUrlRedirect.longUrl);
    } catch (error) {
      res.status(500).json({ msg: `${error.message}` });
    }
  },

  // delete urls
  deleteLinks: async (req, res) => {
    try {
      await UrlModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) throw err;
        res.redirect('/');
      });
    } catch (error) {
      res.status(500).json({ msg: `${error.message}` });
    }
  },
};

// generate random shortURL
const generateShortUrl = () => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
