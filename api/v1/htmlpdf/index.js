const express = require('express');
const router = express.Router();
const controller = require('./controller');
const utils = require('../../../utils/utils');

router.post('/create-pdf', controller.postCardPdf, controller.createPDF);

module.exports = router;