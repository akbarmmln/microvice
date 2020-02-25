const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/inquiryOidByNikOrPhoneNumber', controller.registrationLoyalty);
router.post('/inquiryPointTiering', controller.inquiryPointTiering);

module.exports = router;