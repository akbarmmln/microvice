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
            "srcCode": "0",
            "srcMessage": "Success",
            "addInfo": {
                "requestId": "AKSES-02344991",
                "requestTimestamp": "2019-06-11 11:03:22",
                "refNo": "20220610152231771539357687739435",
                "srcTarget": "0"
            }
        },
        "data": {
            "result": "Success",
            "data": [
                {
                    "szBranchId": "0201",
                    "noKontrak": "020122200241",
                    "nama": "PK BAMBANG                    ",
                    "alamat": "JALAN JAUH 1 01/01",
                    "noSeri": "              ",
                    "jenisPelanggan": "02",
                    "noAngsuran": "4",
                    "noTandaPengesahan": "",
                    "jatuhTempo": "16 APR 22",
                    "nilaiTagihan": "4653000",
                    "nilaiAngsuran": "4553000",
                    "nilaiDenda": "100000",
                    "statusAngsuran": "1",
                    "nilaiPembayaran": "0",
                    "nomorSesi": "              ",
                    "stan": "",
                    "transDate": "",
                    "caCode": "660101",
                    "terminalId": "",
                    "updateDate": "",
                    "tanggalSettlement": "",
                    "statusProses": "0",
                    "tanggalProses": "",
                    "statusProsesCabang": "",
                    "tanggalProsesCabang": "",
                    "nilaiMaksimal": "4653000",
                    "nilaiMinimal": "4653000",
                    "switchId": "",
                    "transReference": "",
                    "fee": "0",
                    "caDistributionChannel": "",
                    "caPan": "",
                    "caTransactionTime": "",
                    "caTransactionDate": "",
                    "nilaiBunga": "0"
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