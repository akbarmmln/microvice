const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/trackingOrder', controller.trackingOrder);

module.exports = router;