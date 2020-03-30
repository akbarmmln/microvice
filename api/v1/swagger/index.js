const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/acction/trackingOrder', controller.trackingOrderAction);
router.post('/star/trackingOrder', controller.trackingOrderStar);
router.post('/contractList', controller.contractList);

module.exports = router;