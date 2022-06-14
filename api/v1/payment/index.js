const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/inquiry-dwallet', controller.inqDWallet);
router.post('/submit-dwallet', controller.submitDWallet);

router.post('/debit-dwallet', controller.debitdwallet);

module.exports = router;