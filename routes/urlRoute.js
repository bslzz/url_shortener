const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.route('/').get(urlController.getAllUrls);
router.route('/create').post(urlController.postNewUrl);

module.exports = router;
