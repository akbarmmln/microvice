const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/registrationLoyalty', controller.registrationLoyalty);

module.exports = router;