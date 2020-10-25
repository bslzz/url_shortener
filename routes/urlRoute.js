const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.route('/').get(urlController.getAllUrls);
router.route('/create').post(urlController.postNewUrl);
router.route('/:urlId').get(urlController.shortLink);

module.exports = router;
