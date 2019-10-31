const express = require('express');
const router = express.Router();
const controller = require('./controller');
const utils = require('../../../utils/utils');

router.post('/show-pegawai', controller.showpegawai);
router.post('/update-pegawai', controller.updatepegawai);

module.exports = router;