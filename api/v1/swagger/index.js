const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/trackingOrder', controller.trackingOrder);
router.post('/contractList', controller.contractList);
router.post('/regis-loyalty', controller.regisLoyalty);

module.exports = router;