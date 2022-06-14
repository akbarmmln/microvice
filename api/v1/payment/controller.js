'use strict';
const uuidv4 = require('uuid/v4');
const logger = require('../../../config/logger');
const rsMsg = require('../../../response/rs');
const errMsg = require('../../../error/resError');
const moment = require('moment');
const rp = require('request-promise');
const fires = require('../../../config/firebase').fire;
const db = fires.firestore()
const storage = fires.storage();
const bucket = storage.bucket('projectname-63209.appspot.com');
const FileType = require('file-type');

exports.inqDWallet = async function (req, res) {
    res.status(200).json({
        "header": {
            "code": "ESB-00-000",
            "message": "Permintaan berhasil diproses",
            "srcCode": "200",
            "srcMessage": "Success",
            "addInfo": {
                "requestId": "ADCK-201810241851289596",
                "requestTimestamp": "2019-04-02 12:46:42",
                "refNo": "20220614144919697957477734716861",
                "srcTarget": "0"
            }
        },
        "data": {
            "responseCode": "0",
            "msg": "Success",
            "RC1": [
                {
                    "branchId": "0201",
                    "contractNo": "020122200241",
                    "name": "PK BAMBANG                    ",
                    "alamat": "JALAN JAUH 1 01/01",
                    "noSeri": "              ",
                    "jenisPelanggan": "02",
                    "angsuranNo": "4",
                    "jatuhTempo": "16-04-2022",
                    "nilaiTagihan": "4653000",
                    "nilaiAngsuran": "4553000",
                    "nilaiDenda": "100000",
                    "statusAngsuran": "1",
                    "nilaiPembayaran": "0",
                    "nomorSeri": "              ",
                    "stan": "",
                    "transDate": "",
                    "caCode": "880105",
                    "terminalId": "",
                    "updateDate": "",
                    "tglSettlement": "",
                    "statusProses": "0",
                    "tglProses": "",
                    "statusProsesCabang": "",
                    "tglProsesCabang": "",
                    "nilaiMaksimal": "4653000",
                    "nilaiMinimal": "4653000",
                    "bunga": "0",
                    "swithcId": "",
                    "transReferance": "",
                    "fee": "0",
                    "caDistributionChannel": "",
                    "caAn": "",
                    "caTransactionTime": "",
                    "caTransactionDate": "",
                    "noTandaPengesahan": "",
                    "finType": "1",
                    "feeAdira": "2500",
                    "feeSwitcher": "0",
                    "feeCa": "3500",
                    "totalFeeBase": "6000"
                }
            ]
        }
    })
}

exports.submitDWallet = async function (req, res) {
    res.status(200).json({
        "header": {
            "code": "ESB-00-000",
            "message": "Permintaan berhasil diproses",
            "srcCode": "200",
            "srcMessage": "Success",
            "addInfo": {
                "requestId": "ADCK-20220308170909",
                "requestTimestamp": "2022-03-08 17:09:09",
                "refNo": "20220308170909173705148212827835",
                "srcTarget": "0"
            }
        },
        "data": {
            "pengesahanNo": "734146WKK1",
            "codeResponse": "0",
            "msg": "Success"
        }
    })
}

exports.debitdwallet = async function (req, res) {
    res.status(200).json({
        "responseCode": "1000",
        "responseMessage": "Process successful.",
        "responseTime": "2021-09-14T17:44:08.195+0700",
        "response": {
            "debitInstruction": {
                "accountNumber": "081123456789",
                "amount": "100000",
                "description": "",
                "reference": "0b4d9cc3-8c96-46c1-b779-1cef474e86eb",
                "remarks": "008#0987544#4#150000#0#0#0#2500#2500",
                "requestId": "ADIRA2203011744081951234",
                "micrositeUrl": "https://www.danamon.co.id/dwallet/microsite/mpin/{jwt}"
            }
        }
    })
}