const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/acction/trackingOrder', controller.trackingOrderAction);
router.post('/star/trackingOrder', controller.trackingOrderStar);
router.post('/dop/trackingOrder', controller.trackingOrderDop);
router.post('/contractList', controller.contractList);
router.post('/contractList-account', controller.contractListAccount);

router.post('/firepost', controller.firepost);
router.post('/firepost-batch', controller.firepostBatch);
router.get('/fire-all-data', controller.getAllData);
router.get('/fire-get-byid/:id', controller.fireGetByID);
router.post('/fire-update', controller.fireUpdate);
router.post('/fire-delete', controller.fireDelete);
router.post('/join-collection', controller.joinCollection);
router.get('/other-collection/:id/:page/:limit', controller.otherCollection);

router.post('/upload-file', controller.uploadFile);

router.get('/callback-token', controller.callBackToken);
router.get('/token-ig', controller.tokenIG);

router.post('/api/aol/v1/inquiryListContractCont', controller.inquiryListContractCont);
router.post('/api/i5/gapura/v1/inqueryEsspay', controller.inqueryEsspay);
router.post('/api/i5/gapura/v1/paymentEsspay', controller.paymentEsspay);
router.post('/api/aol/v1/inquiryListContractOid', controller.inquiryListContractOid);
router.post('/api/aol/v1/inquiryOid', controller.inquiryOid);

router.post('/valencia/v1/authenticate/authtoken', controller.MIAuthToken);
// router.post('/valencia/v1/datapool/submit_v2', controller.MiSubmitData);
// router.post('/valencia/v1/datamaster/retrieve', controller.MiGetPayment);

router.post('/api/aol/v1/inquiryPaymentHistory', controller.inquiryPaymentHistory);

router.post('/api/aol/v1/inquiryByNoContract', controller.inquiryByNoContract);
router.post('/api/aol/v1/submitInquiryRenewalInsurance', controller.submitInquiryRenewalInsurance);

module.exports = router;