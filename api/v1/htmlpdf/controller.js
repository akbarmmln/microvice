'use strict';

const rsmg = require('../../../response/rs');
const errmsg = require('../../../error/resError');
const utils = require('../../../utils/utils');
const moment = require('moment');
const uuidv4 = require('uuid/v4');
const logger = require('../../../config/logger');
const transac = require('../../../config/db').Sequelize;
const pdfTemplate = require('./template/html');
const pdf = require('html-pdf');
const fs = require('fs');
const options = {
    height: "16.54in",
    width: "10.89in",
};
const oss = require('../../../config/oss').client;
const dataoss = require('../../../config/oss');
const pug = require('pug');
const compiledEmailTempalte = pug.compileFile(__dirname + '/template/mail.pug');
const https = require('https');
const accessKey = process.env.hmac_accessKey;
const secretKey = process.env.hmac_secretKey;
const httpMethod = 'GET';
const host = process.env.endpoint;
const region = process.env.region;
const endpoint = 'https://' + host;
const bucket = process.env.bucket;
const objectKey = 'playstore.png';
const expiration = 100  // time in seconds
const mailer = require('../../../config/mailer');

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
          req.reqs = reqs;
          req.filename = buffer;
          return next();
        });
    } catch (e) {
        logger.error('error create PDF', e.toString());
        throw e;
    }
}

exports.aa = async function(req, res){
    logger.debug('Creating bucket');
    let filename = 'item1.pdf';
    let bufs = [];
    // let a = await cos.createBucket({
    //         Bucket: 'testname',
    //         CreateBucketConfiguration: {
    //           LocationConstraint: 'jp-tok-standard'
    //         },        
    //     }).promise()
    let html = await pdfTemplate.getHTMLHISPAY(req.reqs.body);
    pdf.create(html, options).toStream(async function (err, stream) {
        if (err) {
          logger.error(`functionality error pdf`);
          throw err;
        }
        stream.pipe(fs.createWriteStream(`./stash/uploaddoc/${filename}`));
        stream.on('data', function(d){ bufs.push(d);});
        stream.on('end', async function () {
            logger.debug(`success create pdf file, uploading to oss`);
            let ff = new Buffer.concat(bufs);
            let a = await oss.putObject({
                Bucket: process.env.bucket, 
                Key: 'item1.pdf',
                Body: ff
            }).promise()
            fs.unlinkSync(`./stash/uploaddoc/${filename}`);
            return res.json(a);
        })
    });
}

exports.coba = async function(req, res){
    // assemble the standardized request
    var time = moment().utc();
    var timestamp = time.format('YYYYMMDDTHHmmss') + 'Z';
    var datestamp = time.format('YYYYMMDD');

    var standardizedQuerystring = 'X-Amz-Algorithm=AWS4-HMAC-SHA256' +
        '&X-Amz-Credential=' + encodeURIComponent(accessKey + '/' + datestamp + '/' + region + '/s3/aws4_request') +
        '&X-Amz-Date=' + timestamp +
        '&X-Amz-Expires=' + expiration.toString() +
        '&X-Amz-SignedHeaders=host';

    var standardizedResource = '/' + bucket + '/' + objectKey;

    var payloadHash = 'UNSIGNED-PAYLOAD';
    var standardizedHeaders = 'host:' + host;
    var signedHeaders = 'host';

    var standardizedRequest = httpMethod + '\n' +
        standardizedResource + '\n' +
        standardizedQuerystring + '\n' +
        standardizedHeaders + '\n' +
        '\n' +
        signedHeaders + '\n' +
        payloadHash;

    // assemble string-to-sign
    var hashingAlgorithm = 'AWS4-HMAC-SHA256';
    var credentialScope = datestamp + '/' + region + '/' + 's3' + '/' + 'aws4_request';
    var sts = hashingAlgorithm + '\n' +
        timestamp + '\n' +
        credentialScope + '\n' +
        await dataoss.hashHex(standardizedRequest);

    // generate the signature
    let signatureKey = await dataoss.createSignatureKey(secretKey, datestamp, region, 's3');
    let signature = await dataoss.hmacHex(signatureKey, sts);

    // create and send the request
    // the 'requests' package autmatically adds the required 'host' header
    var requestUrl = endpoint + '/' +
        bucket + '/' +
        objectKey + '?' +
        standardizedQuerystring +
        '&X-Amz-Signature=' +
        signature;

    return res.json(requestUrl);
    // var request = https.get(requestUrl, function (response) {
    //     console.log('\nResponse from IBM COS ----------------------------------');
    //     console.log(`Response code: ${response.statusCode}\n`);

    //     response.on('data', function (chunk) {
    //         console.log('Response: ' + chunk);
    //     });
    // });
    // request.end();
}

exports.mail = async function(req, res){
    let mailObject = {
        to: 'akbarmmln@gmail.com',
        subject: `testing`,
        html: compiledEmailTempalte(),
    };
    try{
        await mailer.sendGridMailer(mailObject);
        logger.debug('send mail success')
        return res.json(rsmg());
    }catch(e){
        logger.error('send mail failed', e)
        return res.json(errmsg('10000', e))
    }
}