const express = require('express');
const router = express.Router();
const controller = require('./controller');
const utils = require('../../../utils/utils');

router.post('/create-pdf', controller.postCardPdf, controller.createPDF);
router.post('/aa', controller.postCardPdf, controller.aa);

router.post('/coba', controller.coba);
router.post('/mail', controller.mail);

module.exports = router;