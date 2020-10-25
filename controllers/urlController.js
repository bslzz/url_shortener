const UrlModel = require('../models/urlSchema');

module.exports = {
  // get all URLs from the db
  getAllUrls: async (req, res) => {
    let allURLs = await UrlModel.find((err, data) => {
      res.render('home', {
        urlResult: data,
      });
    });
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
  console.log(result);
  return result;
};
