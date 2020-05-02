'use strict';

const rsmg = require('../../../response/rs');
const utils = require('../../../utils/utils');
const moment = require('moment');
const uuidv4 = require('uuid/v4');
const logger = require('../../../config/logger');
const transac = require('../../../config/db').Sequelize;
const pdfTemplate = require('./template/html');
const pdf = require('html-pdf');
const options = {
    height: "16.54in",
    width: "10.89in",
};
  
exports.createPDF = async function(req, res){
    try {
        logger.debug('sending PDF to Client');
        res.set('responseType: blob');
        let sendFile = req.filename.toString('base64');
        res.send(sendFile);
    } catch (e) {
        logger.error('error sending PDF', e.toString());
        throw e;
    }
}

exports.postCardPdf = async function(req, res, next){
    try {
        let reqs = {};
        reqs.body = {
            "contract": {
                "arecContNo": "012343331115555",
                "emplName": "Rendy",
                "product_frame_no": "MHI123HGFKF876543456",
                "arecTop": "36",
                "payterm": "IN ADVANCE/MUKA",
                "custName": "BUDIONO",
                "product_brand": "Honda",
                "product_model": "Scoopy",
                "product_machine_no": "HR1567FFD67",
                "product_no_pol": "B6262TRE",
                "alamat": "DSN BANCI , 1203, PROVINSI JAWA TIMUR, 61351",
                "kolektorUmum": "",
                "custColcAddr": "DSN BANCI , 1203, PROVINSI JAWA TIMUR, 61351",
                "paymTypeDesc": "AUTO DEBET",
                "timestamp": "Mei 22 2019, 10:29:40",
                "custOtherAddr": " , , PROVINSI JAWA TIMUR, 61351",
                "insfInsfName": "",
                "sales_through": "Direct Sales",
                "applFinType": "0"
            },
            "history": [
                {
                    "arecCurrDate": "2019-06-14 12:55:40.0",
                    "arecInstNo": "1",
                    "arecInstDate": "2019-07-02 00:00:00.0",
                    "arecTranDatetime": "",
                    "arecRefDatetime": "",
                    "newOd": "1",
                    "arecRefNo": "",
                    "kolektor": "",
                    "angsuran": "2404000",
                    "paid": "",
                    "arecPnltCalc": "0",
                    "arecPnltPaid": "0",
                    "bankName": "",
                    "userId": "",
                    "transactionCode": null
                },
                {
                    "arecCurrDate": "2019-06-14 12:55:40.0",
                    "arecInstNo": "2",
                    "arecInstDate": "2020-01-02 00:00:00.0",
                    "angsuran": "2404000",
                    "arecPnltCalc": "0",
                    "arecPnltPaid": "0",
                    "arecRefNo": "",
                    "paid": " ",
                    "bankName": "",
                    "userId": "",
                    "newOd": "5",
                    "arecTranDatetime": "",
                    "arecRefDatetime": "",
                    "kolektor": "",
                    "transactionCode": null
                },
                {
                    "arecCurrDate": "2019-06-14 12:55:40.0",
                    "arecInstNo": "3",
                    "arecInstDate": "2021-03-02 00:00:00.0",
                    "angsuran": "2404000",
                    "arecPnltCalc": "0",
                    "arecPnltPaid": "0",
                    "arecRefNo": "",
                    "paid": " ",
                    "bankName": "",
                    "userId": "",
                    "arecTranDatetime": "",
                    "arecRefDatetime": "",
                    "kolektor": "",
                    "transactionCode": null
                },
                {
                    "arecCurrDate": "2019-06-14 12:55:40.0",
                    "arecInstNo": "4",
                    "arecInstDate": "2018-07-02 00:00:00.0",
                    "angsuran": "2404000",
                    "arecPnltCalc": "211552",
                    "arecPnltPaid": "0",
                    "arecRefNo": "032118R000140",
                    "paid": "PAID",
                    "bankName": "ADIRA ANGSURAN",
                    "userId": "FITA TRIANASARI KHOMARIAH     ",
                    "arecTranDatetime": "2018-08-15 00:00:00.0",
                    "arecRefDatetime": "2018-08-15 00:00:00.0",
                    "kolektor": "BAMBANG HARIYONO",
                    "transactionCode": null
                },
                {
                    "arecCurrDate": "2019-06-14 12:55:40.0",
                    "arecInstNo": "5",
                    "arecInstDate": "2018-08-02 00:00:00.0",
                    "angsuran": "2404000",
                    "arecPnltCalc": "62504",
                    "arecPnltPaid": "0",
                    "arecRefNo": "032118R000140",
                    "paid": "PAID",
                    "bankName": "ADIRA ANGSURAN",
                    "userId": "FITA TRIANASARI KHOMARIAH     ",
                    "arecTranDatetime": "2018-08-15 00:00:00.0",
                    "arecRefDatetime": "2018-08-15 00:00:00.0",
                    "kolektor": "BAMBANG HARIYONO",
                    "transactionCode": null
                },
                {
                    "arecCurrDate": "2019-06-14 12:55:40.0",
                    "arecInstNo": "6",
                    "arecInstDate": "2018-09-02 00:00:00.0",
                    "angsuran": "2404000",
                    "arecPnltCalc": "240400",
                    "arecPnltPaid": "20000",
                    "arecRefNo": "032118R000183",
                    "paid": "PAID",
                    "bankName": "ADIRA ANGSURAN",
                    "userId": "RETNO DWI INDRA MAYASARI      ",
                    "arecTranDatetime": "2018-10-22 00:00:00.0",
                    "arecRefDatetime": "2018-10-22 00:00:00.0",
                    "kolektor": "BAMBANG HARIYONO",
                    "transactionCode": null
                },
                {
                    "arecCurrDate": "2019-06-14 12:55:40.0",
                    "arecInstNo": "7",
                    "arecInstDate": "2018-10-02 00:00:00.0",
                    "angsuran": "2404000",
                    "arecPnltCalc": "466376",
                    "arecPnltPaid": "0",
                    "arecRefNo": "020119R000002",
                    "paid": "PAID",
                    "bankName": "",
                    "userId": "",
                    "arecTranDatetime": "2019-01-07 00:00:00.0",
                    "arecRefDatetime": "2019-01-07 00:00:00.0",
                    "kolektor": "",
                    "transactionCode": null
                },
                {
                    "arecCurrDate": "2019-06-14 12:55:40.0",
                    "arecInstNo": "8",
                    "arecInstDate": "2018-11-02 00:00:00.0",
                    "angsuran": "2404000",
                    "arecPnltCalc": "317328",
                    "arecPnltPaid": "0",
                    "arecRefNo": "020119R000002",
                    "paid": "PAID",
                    "bankName": "",
                    "userId": "",
                    "arecTranDatetime": "2019-01-07 00:00:00.0",
                    "arecRefDatetime": "2019-01-07 00:00:00.0",
                    "kolektor": "",
                    "transactionCode": null
                },
                {
                    "arecCurrDate": "2019-06-14 12:55:40.0",
                    "arecInstNo": "9",
                    "arecInstDate": "2018-12-02 00:00:00.0",
                    "angsuran": "2404000",
                    "arecPnltCalc": "173088",
                    "arecPnltPaid": "0",
                    "arecRefNo": "020119R000002",
                    "paid": "PAID",
                    "bankName": "",
                    "userId": "",
                    "arecTranDatetime": "2019-01-07 00:00:00.0",
                    "arecRefDatetime": "2019-01-07 00:00:00.0",
                    "kolektor": "",
                    "transactionCode": null
                },
                {
                    "arecCurrDate": "2019-06-14 12:55:40.0",
                    "arecInstNo": "10",
                    "arecInstDate": "2019-01-02 00:00:00.0",
                    "angsuran": "2404000",
                    "arecPnltCalc": "24040",
                    "arecPnltPaid": "0",
                    "arecRefNo": "020119R000002",
                    "paid": "PAID",
                    "bankName": "",
                    "userId": "",
                    "arecTranDatetime": "2019-01-07 00:00:00.0",
                    "arecRefDatetime": "2019-01-07 00:00:00.0",
                    "kolektor": "",
                    "transactionCode": null
                }
            ]
        }
        let html = await pdfTemplate.getHTMLHISPAY(reqs.body),
          filename = `${reqs.body.contract.arecContNo}${moment().format('DDMMYYHHMMSS')}.pdf`;
        logger.debug('creating PDF');
        pdf.create(html, options).toBuffer(function (err, buffer) {
          if (err) {
            return console.log(err.toString());
          }
          req.filename = buffer;
          return next();
        });
    } catch (e) {
        logger.error('error create PDF', e.toString());
        throw e;
    }
}