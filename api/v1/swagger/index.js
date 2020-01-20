const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/trackingOrder', controller.trackingOrder);
router.post('/contractList', controller.contractList);

module.exports = router;