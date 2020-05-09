const express = require('express');
const router = express.Router();
const controller = require('./controller');
const utils = require('../../../utils/utils');

router.post('/create-pdf', controller.postCardPdf, controller.createPDF);
router.post('/upload-oss', controller.postCardPdf, controller.uploadOSS);

router.post('/show-url', controller.showURL);
router.post('/mail', controller.mail);

module.exports = router;