const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/registrationLoyalty', controller.registrationLoyalty);
router.post('/validation-input', controller.validationInput);
router.post('/list-documents-ecm', controller.listDocEcm);
router.post('/download-documents-ecm', controller.downloadDocEcm);
router.post('/lsit-ecm-real', controller.LISTECMREAL);

module.exports = router;