const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/', controller.inquiryPointTiering);

module.exports = router;