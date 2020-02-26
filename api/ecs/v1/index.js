const express = require('express');
const router = express.Router();
const controller = require('./controller');
const utils = require('../../../utils/utils');

router.post('/run-ecs', controller.runecs);
router.post('/stop-ecs', controller.stopecs);

module.exports = router;