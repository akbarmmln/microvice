const express = require('express');
const router = express.Router();
const controller = require('./controller');
const utils = require('../../../utils/utils');

router.post('/show-pegawai', controller.showpegawai);
router.post('/update-pegawai', controller.updatepegawai);
router.post('/delete-pegawai', controller.deletepegawai);

module.exports = router;