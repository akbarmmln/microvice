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
const utils = require('../../../utils/utils');
const AdrMiPolis = require('../../../modeldb/adr_mincroinsurance_polis');

exports.contractListAccount = async function (req, res) {
  res.status(200).json({
    "message": "success",
    "data": [
      {
        "objekPendingInvoice": {
          "trx_inv": false,
          "order_id": null
        },
        "contract_object": "DURABLE",
        "contract_type": "ANNUITY",
        "total_credit_value": "2099000",
        "pc_code": "005",
        "pc_code_description": "DURABLE",
        "product_no_pol": "",
        "product_brand": "OPPO",
        "product_model": "SMART PHONE",
        "product_model_detail": "SMART PHONE",
        "product_stnk_expiry_date": "",
        "product_frame_no": "OPPO NEO 7 01",
        "product_machine_no": "OPPO NEO 7 01",
        "cmo_name": "",
        "cfo_name": "AGUS SETIAWAN",
        "sales_through": "Merchant Quantum",
        "first_installment_date": "2016-05-22 00:00:00.0",
        "contract_no": "024116300047",
        "branch_id": "0241",
        "branch_name": "CIANJUR-JUANDA",
        "installment_payment_status": "AKTIF",
        "installment_month": "217000",
        "installment_min": "216810",
        "installment_max": "217000",
        "remain_installment": "",
        "next_duedate": "",
        "collection_date": "2017-04-26 00:00:00.0",
        "tenure_month": "12",
        "tenure_x": "",
        "penalty_amount": "0",
        "contract_status_code": "00",
        "contract_status_desc": "AKTIF",
        "oid": "02090502973953",
        "status_change_date": "2016-05-25 16:02:58.0",
        "jb_date": "",
        "jb_score": "",
        "jb_due": "FALSE",
        "contract_va_number": "7755024116300047"
      },
      {
        "objekPendingInvoice": {
          "trx_inv": false,
          "order_id": null
        },
        "contract_object": "DURABLE",
        "contract_type": "ANNUITY",
        "total_credit_value": "3000000",
        "pc_code": "005",
        "pc_code_description": "DURABLE",
        "product_no_pol": "",
        "product_brand": "SAMSUNG",
        "product_model": "LED 32 INCH",
        "product_model_detail": "LED 32 INCH",
        "product_stnk_expiry_date": "",
        "product_frame_no": "TVLED32INCH100417",
        "product_machine_no": "TVLED32INCH100417",
        "cmo_name": "",
        "cfo_name": "AGUS SETIAWAN",
        "sales_through": "Merchant Quantum",
        "first_installment_date": "2017-04-10 00:00:00.0",
        "contract_no": "024117300056",
        "branch_id": "0241",
        "branch_name": "CIANJUR-JUANDA",
        "installment_payment_status": "AKTIF",
        "installment_month": "295000",
        "installment_min": "295000",
        "installment_max": "295000",
        "remain_installment": "2655000",
        "next_duedate": "2017-07-10 00:00:00.0",
        "collection_date": "2017-06-09 00:00:00.0",
        "tenure_month": "12",
        "tenure_x": "4",
        "penalty_amount": "0",
        "contract_status_code": "00",
        "contract_status_desc": "AKTIF",
        "oid": "02090502973953",
        "status_change_date": "2017-04-10 11:11:09.0",
        "jb_date": "",
        "jb_score": "",
        "jb_due": "FALSE",
        "contract_va_number": "7755024117300056"
      },
      {
        "objekPendingInvoice": {
          "trx_inv": false,
          "order_id": null
        },
        "contract_object": "MOTOR",
        "contract_type": "ANNUITY",
        "total_credit_value": "22500000",
        "pc_code": "009",
        "pc_code_description": "MOTOR JASA",
        "product_no_pol": "F3890XM",
        "product_brand": "YAMAHA",
        "product_model": "N-MAX",
        "product_model_detail": "N-MAX",
        "product_stnk_expiry_date": "2021-01-25 00:00:00.0",
        "product_frame_no": "MH3SG3120GK059290",
        "product_machine_no": "G3E4E0107536",
        "cmo_name": "",
        "cfo_name": "AGUS SETIAWAN",
        "sales_through": "Customer Retention RO",
        "first_installment_date": "2017-04-10 00:00:00.0",
        "contract_no": "024117101741",
        "branch_id": "0241",
        "branch_name": "CIANJUR-JUANDA",
        "installment_payment_status": "AKTIF",
        "installment_month": "1285000",
        "installment_min": "1284999",
        "installment_max": "1285000",
        "remain_installment": "17989999",
        "next_duedate": "2017-07-10 00:00:00.0",
        "collection_date": "2017-06-09 00:00:00.0",
        "tenure_month": "17",
        "tenure_x": "4",
        "penalty_amount": "0",
        "contract_status_code": "00",
        "contract_status_desc": "AKTIF",
        "oid": "02090502973953",
        "status_change_date": "2017-03-10 15:06:13.0",
        "jb_date": "",
        "jb_score": "",
        "jb_due": "FALSE",
        "contract_va_number": "7755024117101741"
      }
    ],
    "language": "EN",
    "timestamp": "2021-05-10T11:00:05+07:00"
  })
}

exports.contractList = async function (req, res) {
  res.json({
    "header": {
      "code": "ESB-00-000",
      "message": "Permintaan berhasil diproses",
      "srcCode": "00",
      "srcMessage": "SUCCESS",
      "addInfo": {
        "requestId": "ADCK-02344991",
        "requestTimestamp": "2019-04-02 18:13:22",
        "refNo": "20200116154613841782114062136154",
        "srcTarget": "0"
      }
    },
    "data": {
      "result": "SUCCESS",
      "data": [
        {
          "contractNo": "021217200425",
          "contractObject": "MOBIL",
          "contractType": "ANNUITY",
          "totalCreditValue": "219600000",
          "pcCode": "003",
          "pcCodeDescription": "MOBIL BARU          ",
          "productNoPol": "E1558LK",
          "productBrand": "TOYOTA",
          "productModel": "GRND NEW VELOZ GMTDU",
          "productModelDetail": "GRND NEW VELOZ GMTDU",
          "productStnkExpiryDate": "2017-06-07 00:00:00.0",
          "productFrameNo": "MHKM5EA4JHK019007",
          "productMachineNo": "1NRF273845",
          "cmoName": "",
          "cfoName": "MUSLICH",
          "salesThrough": "Dealer",
          "firstInstallmentDate": "2017-05-20 00:00:00.0",
          "branchId": "0212",
          "branchName": "CIREBON-WAHIDIN",
          "installmentPaymentStatus": "NON AKTIF",
          "installmentMonth": "6500000",
          "installmentMin": "6500000",
          "installmentMax": "149500000",
          "remainInstallment": "",
          "nextDueDate": "",
          "collectionDate": "2018-05-28 00:00:00.0",
          "tenureMonth": "36",
          "tenureX": "15",
          "penaltyAmount": "0",
          "contractStatusCode": "00",
          "contractStatusDesc": "ACTIVE",
          "oid": "02120503348209",
          "statusChangeDate": "2019-01-29 01:27:55.0",
          "jbDate": "",
          "jbScore": "",
          "jbDue": "FALSE",
          "contractVaNumber": "7755021217200425",
          "accountNoPegasus": "003607481706",
          "bankAccountPegasus": "BANK DANAMON",
          "accountNamePegasus": "MUSLICH",
          "statusRekPegasus": "NOT ACTIVE"
        },
        {
          "contractNo": "021217200425",
          "contractObject": "MOBIL",
          "contractType": "ANNUITY",
          "totalCreditValue": "219600000",
          "pcCode": "003",
          "pcCodeDescription": "MOBIL BARU          ",
          "productNoPol": "E1558LK",
          "productBrand": "TOYOTA",
          "productModel": "GRND NEW VELOZ GMTDU",
          "productModelDetail": "GRND NEW VELOZ GMTDU",
          "productStnkExpiryDate": "2017-06-07 00:00:00.0",
          "productFrameNo": "MHKM5EA4JHK019007",
          "productMachineNo": "1NRF273845",
          "cmoName": "",
          "cfoName": "MUSLICH",
          "salesThrough": "Dealer",
          "firstInstallmentDate": "2017-05-20 00:00:00.0",
          "branchId": "0212",
          "branchName": "CIREBON-WAHIDIN",
          "installmentPaymentStatus": "NON AKTIF",
          "installmentMonth": "6500000",
          "installmentMin": "6500000",
          "installmentMax": "149500000",
          "remainInstallment": "",
          "nextDueDate": "",
          "collectionDate": "2018-05-28 00:00:00.0",
          "tenureMonth": "36",
          "tenureX": "15",
          "penaltyAmount": "0",
          "contractStatusCode": "00",
          "contractStatusDesc": "ACTIVE",
          "oid": "02120503348209",
          "statusChangeDate": "2019-01-29 01:27:55.0",
          "jbDate": "",
          "jbScore": "",
          "jbDue": "FALSE",
          "contractVaNumber": "7755021217200425",
          "accountNoPegasus": "003607481706",
          "bankAccountPegasus": "BANK DANAMON",
          "accountNamePegasus": "MUSLICH",
          "statusRekPegasus": "ACTIVE"
        },
        {
          "contractNo": "021217200425",
          "contractObject": "MOBIL",
          "contractType": "ANNUITY",
          "totalCreditValue": "219600000",
          "pcCode": "003",
          "pcCodeDescription": "MOBIL BARU          ",
          "productNoPol": "E1558LK",
          "productBrand": "TOYOTA",
          "productModel": "GRND NEW VELOZ GMTDU",
          "productModelDetail": "GRND NEW VELOZ GMTDU",
          "productStnkExpiryDate": "2017-06-07 00:00:00.0",
          "productFrameNo": "MHKM5EA4JHK019007",
          "productMachineNo": "1NRF273845",
          "cmoName": "",
          "cfoName": "MUSLICH",
          "salesThrough": "Dealer",
          "firstInstallmentDate": "2017-05-20 00:00:00.0",
          "branchId": "0212",
          "branchName": "CIREBON-WAHIDIN",
          "installmentPaymentStatus": "NON AKTIF",
          "installmentMonth": "6500000",
          "installmentMin": "6500000",
          "installmentMax": "149500000",
          "remainInstallment": "",
          "nextDueDate": "",
          "collectionDate": "2018-05-28 00:00:00.0",
          "tenureMonth": "36",
          "tenureX": "15",
          "penaltyAmount": "0",
          "contractStatusCode": "00",
          "contractStatusDesc": "ACTIVE",
          "oid": "02120503348209",
          "statusChangeDate": "2019-01-29 01:27:55.0",
          "jbDate": "",
          "jbScore": "",
          "jbDue": "FALSE",
          "contractVaNumber": "7755021217200425",
        }]
    }
  });
}

exports.trackingOrderStar = async function (req, res) {
  res.json({
    "result": "SUCCESS",
    "data": {
      "transactions": [
        {
          "merchantId": "5",
          "merchantName": "Electronic City",
          "merchantLogo": null,
          "merchantTimeout": 120,
          "merchantIsTimeout": true,
          "productName": "Led Standard",
          "qty": "1",
          "total": 1899000.0,
          "tMinusDP": 1899000.0,
          "installment": 237000.0,
          "orderId": "1204675409",
          "orderDate": "2020-03-26T02:06:25Z",
          "applicationNo": null,
          "applicationStatusCd": "DATA_COMPLETION",
          "applicationStatusName": "Data Completion",
          "applicationStatusDesc": "Data Completion",
          "firstPayment": null,
          "vaPayment": null,
          "urlPayment": null,
          "statusPayment": null,
          "currentStatus": "DATA_COMPLETION",
          "histories": [
            {
              "applicationStatusCd": "DATA_COMPLETION",
              "createdDate": "2020-03-26T02:35:44.950Z"
            }
          ]
        },
        {
          "merchantId": "6",
          "merchantName": "Hartono",
          "merchantLogo": null,
          "merchantTimeout": 120,
          "merchantIsTimeout": true,
          "productName": "Standing Dispenser",
          "qty": "1",
          "total": 3059000.0,
          "tMinusDP": 3059000.0,
          "installment": 398000.0,
          "orderId": "21024",
          "orderDate": "2020-03-12T12:38:13Z",
          "applicationNo": null,
          "applicationStatusCd": "DATA_VALIDATION",
          "applicationStatusName": "Data Validation",
          "applicationStatusDesc": "Data Validation",
          "firstPayment": null,
          "vaPayment": null,
          "urlPayment": null,
          "statusPayment": null,
          "currentStatus": "DATA_VALIDATION",
          "histories": [
            {
              "applicationStatusCd": "DATA_COMPLETION",
              "createdDate": "2020-03-12T12:39:28.765Z"
            },
            {
              "applicationStatusCd": "DATA_VALIDATION",
              "createdDate": "2020-03-12T12:51:07.251Z"
            },
          ]
        },
        {
          "merchantId": "6",
          "merchantName": "Hartono",
          "merchantLogo": null,
          "merchantTimeout": 120,
          "merchantIsTimeout": true,
          "productName": "Standing Dispenser",
          "qty": "1",
          "total": 3059000.0,
          "tMinusDP": 3059000.0,
          "installment": 398000.0,
          "orderId": "21073",
          "orderDate": "2020-03-13T02:52:40Z",
          "applicationNo": "0000200113000044",
          "applicationStatusCd": "DOC_SIGN",
          "applicationStatusName": "Doc Sign",
          "applicationStatusDesc": "Doc Sign",
          "firstPayment": 398000.0,
          "vaPayment": null,
          "urlPayment": null,
          "statusPayment": null,
          "currentStatus": "DOC_SIGN",
          "histories": [
            {
              "applicationStatusCd": "DATA_COMPLETION",
              "createdDate": "2020-03-13T02:54:08.200Z"
            },
            {
              "applicationStatusCd": "DATA_VALIDATION",
              "createdDate": "2020-03-13T02:55:24.914Z"
            },
            {
              "applicationStatusCd": "DOC_SIGN",
              "createdDate": "2020-03-13T03:00:40.329Z"
            }
          ]
        },
        {
          "merchantId": "6",
          "merchantName": "Hartono",
          "merchantLogo": null,
          "merchantTimeout": 120,
          "merchantIsTimeout": true,
          "productName": "Standing Dispenser",
          "qty": "1",
          "total": 3059000.0,
          "tMinusDP": 3059000.0,
          "installment": 398000.0,
          "orderId": "20954",
          "orderDate": "2020-03-12T05:58:43Z",
          "applicationNo": "0000200113000041",
          "applicationStatusCd": "COMPLETED",
          "applicationStatusName": "Completed",
          "applicationStatusDesc": "Completed",
          "firstPayment": 398000.0,
          "vaPayment": null,
          "urlPayment": null,
          "statusPayment": null,
          "currentStatus": "COMPLETED",
          "histories": [
            {
              "applicationStatusCd": "DATA_COMPLETION",
              "createdDate": "2020-03-12T05:59:39.862Z"
            },
            {
              "applicationStatusCd": "DATA_VALIDATION",
              "createdDate": "2020-03-12T06:01:51.884Z"
            },
            {
              "applicationStatusCd": "DOC_SIGN",
              "createdDate": "2020-03-12T06:06:33.057Z"
            },
            {
              "applicationStatusCd": "COMPLETED",
              "createdDate": "2020-03-12T06:06:50.527Z"
            }
          ]
        }
      ],
      "statusList": [
        "DATA_COMPLETION",
        "DATA_VALIDATION",
        "PAYMENT",
        "ADDITIONAL_DATA_COMPLETION",
        "DOC_SIGN",
        "COMPLETED"
      ],
      "totalRecord": 186,
      "totalPage": 19
    }
  })
}

exports.trackingOrderAction = async function (req, res) {
  res.json({
    "header": {
      "code": "ESB-00-000",
      "message": "Permintaan berhasil diproses",
      "srcCode": "1",
      "srcMessage": "Sukses",
      "addInfo": {
        "srcTarget": "0"
      }
    },
    "data": {
      "rc1": [
        {
          "noAplikasiPayung": "0000180321000169",
          "noAplikasi": "0000180321000170",
          "kodeCabang": "0321",
          "objectDesc": "MOTOR BEKAS",
          "objectType": "BEBEK",
          "objectBrand": "YAMAHA",
          "objectModel": "JUPITER Z F0",
          "objectYear": "2016",
          "lastKnownState": "CANCEL PO",
          "tanggalStatus": "2019-10-02 17:39:23.0",
          "tanggalAplikasi": "2018-01-08 00:00:00.0",
          "tanggalOrder": "2018-01-08 00:00:00.0"
        },
        {
          "noAplikasiPayung": "0000180321000169",
          "noAplikasi": "0000180321000171",
          "kodeCabang": "0321",
          "objectDesc": "MOTOR BEKAS",
          "objectType": "BEBEK",
          "objectBrand": "YAMAHA",
          "objectModel": "JUPITER Z F1",
          "objectYear": "2016",
          "lastKnownState": "INITIAL DATA ENTRY",
          "tanggalStatus": "2019-10-02 17:39:23.0",
          "tanggalAplikasi": "2018-01-08 00:00:00.0",
          "tanggalOrder": "2018-01-08 00:00:00.0"
        },
        {
          "noAplikasiPayung": "0000180321000169",
          "noAplikasi": "0000180321000172",
          "kodeCabang": "0321",
          "objectDesc": "MOTOR BEKAS",
          "objectType": "BEBEK",
          "objectBrand": "YAMAHA",
          "objectModel": "JUPITER Z F2",
          "objectYear": "2016",
          "lastKnownState": "SURVEY RESULT ENTRY",
          "tanggalStatus": "2019-10-02 17:39:23.0",
          "tanggalAplikasi": "2018-01-08 00:00:00.0",
          "tanggalOrder": "2018-01-08 00:00:00.0"
        },
        {
          "noAplikasiPayung": "0000180321000169",
          "noAplikasi": "0000180321000173",
          "kodeCabang": "0321",
          "objectDesc": "MOTOR BEKAS",
          "objectType": "BEBEK",
          "objectBrand": "YAMAHA",
          "objectModel": "JUPITER Z F3",
          "objectYear": "2016",
          "lastKnownState": "APPROVE LEVEL 8",
          "tanggalStatus": "2019-10-02 17:39:23.0",
          "tanggalAplikasi": "2018-01-08 00:00:00.0",
          "tanggalOrder": "2018-01-08 00:00:00.0"
        },
        {
          "noAplikasiPayung": "0000180321000169",
          "noAplikasi": "0000180321000174",
          "kodeCabang": "0321",
          "objectDesc": "MOBIL BARU",
          "objectType": "MINIBUS",
          "objectBrand": "SUZUKI",
          "objectModel": "ERTIGA GL M/T",
          "objectYear": "2018",
          "lastKnownState": "DONE READY TO PPD ",
          "tanggalStatus": "2019-10-02 17:39:23.0",
          "tanggalAplikasi": "2018-01-08 00:00:00.0",
          "tanggalOrder": "2018-01-08 00:00:00.0"
        },
        {
          "noAplikasiPayung": "0000180321000169",
          "noAplikasi": "0000180321000175",
          "kodeCabang": "0321",
          "objectDesc": "MOTOR BARU",
          "objectType": "SCOOTERMATIC",
          "objectBrand": "HONDA",
          "objectModel": "NEWVARIOTECHNOCBS FI",
          "objectYear": "2018",
          "lastKnownState": "READY TO PPD ",
          "tanggalStatus": "2019-10-02 17:39:23.0",
          "tanggalAplikasi": "2018-01-08 00:00:00.0",
          "tanggalOrder": "2018-01-08 00:00:00.0"
        },
        {
          "noAplikasiPayung": "0000180321000169",
          "noAplikasi": "0000180321000176",
          "kodeCabang": "0321",
          "objectDesc": "DURABLE",
          "objectType": "BED ROOM",
          "objectBrand": "SPRING BED",
          "objectModel": "SPRINGBED",
          "objectYear": "",
          "lastKnownState": "REJECT LEVEL 2",
          "tanggalStatus": "2019-10-02 17:39:23.0",
          "tanggalAplikasi": "2018-01-08 00:00:00.0",
          "tanggalOrder": "2018-01-08 00:00:00.0"
        },
        {
          "noAplikasiPayung": "0000180321000169",
          "noAplikasi": "0000180321000177",
          "kodeCabang": "0321",
          "objectDesc": "MOTOR BEKAS",
          "objectType": "BEBEK",
          "objectBrand": "YAMAHA",
          "objectModel": "JUPITER Z F7",
          "objectYear": "2016",
          "lastKnownState": "DONE READY TO PPD",
          "tanggalStatus": "2019-10-02 17:39:23.0",
          "tanggalAplikasi": "2018-01-08 00:00:00.0",
          "tanggalOrder": "2018-01-08 00:00:00.0"
        }
      ]
    }
  })
}

exports.trackingOrderDop = async function (req, res) {
  res.json({
    "result": "success",
    "data": "[{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"ORDER BARU\",\"tanggalStatus\":\"1/18/2019 6:12:19 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"PROSES SURVEY\",\"tanggalStatus\":\"1/18/2019 6:12:38 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"PROSES BANDING\",\"tanggalStatus\":\"1/18/2019 6:13:37 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"PROSES PERSETUJUAN\",\"tanggalStatus\":\"1/18/2019 6:22:21 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"RETURN DOKUMEN\",\"tanggalStatus\":\"1/18/2019 6:23:12 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"DIBATALKAN\",\"tanggalStatus\":\"2/6/2019 4:20:20 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"DITOLAK\",\"tanggalStatus\":\"2/6/2019 4:21:17 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"DITOLAK FINAL\",\"tanggalStatus\":\"2/6/2019 4:21:43 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"CETAK PO\",\"tanggalStatus\":\"2/6/2019 4:23:36 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"DOKUMEN PENAGIHAN\",\"tanggalStatus\":\"2/6/2019 4:26:30 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"PROSES PENAGIHAN\",\"tanggalStatus\":\"2/6/2019 5:58:12 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"CAIR\",\"tanggalStatus\":\"2/6/2019 5:58:22 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"INPUT DATA\",\"tanggalStatus\":\"2/6/2019 5:58:32 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"INPUT DATA\",\"tanggalStatus\":\"2/6/2019 5:58:45 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"}]"
  })
}

exports.firepost = async function (req, res) {
  try {
    let id = uuidv4();
    let nama = req.body.nama;
    let usia = req.body.usia;
    await db.collection('karyawan').doc(id).create({
      id: id,
      nama: nama,
      usia: usia,
      created_dt: new Date(new Date(moment().format('YYYY-MM-DD HH:mm:ss')).toUTCString())
    });
    return res.status(200).json(rsMsg());
  } catch (e) {
    logger.error('error...', e);
    return res.status(500).json(e.toString());
  }
}

exports.firepostBatch = async function (req, res) {
  try {
    for (let i = 0; i < 10; i++) {
      let newid = uuidv4();
      let nama = `nama ke-${i}`;
      let usia = `umur ke-${i}`;
      await db.collection('karyawan').doc(id).create({
        id: id,
        nama: nama,
        usia: usia,
        created_dt: new Date(new Date(moment().format('YYYY-MM-DD HH:mm:ss')).toUTCString())
      });

    }
  } catch (e) {
    logger.error('error firepostBatch...', e);
    return res.status(500).json(errMsg('10000', e));
  }
}

exports.getAllData = async function (req, res) {
  try {
    let response = [];
    let data = await db.collection('karyawan').get();
    data.forEach((hasil) => {
      response.push({
        id: hasil.id,
        nama: hasil.data().nama,
        usia: hasil.data().usia
      })
    })
    return res.status(200).json(rsMsg(response));
  } catch (e) {
    logger.error('error...', e);
    return res.status(500).json(e.toString());
  }
}

exports.fireGetByID = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await db.collection('karyawan').doc(id).get();
    let response = data.data();
    if (!response) {
      throw '08011';
    }
    return res.status(200).json(rsMsg({
      id: id,
      ...response
    }));
  } catch (e) {
    if (typeof e === 'string') {
      logger.error('error request data', e.toString());
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e.toString());
      return res.status(500).json(errMsg('10000'));
    }
  }
}

exports.fireUpdate = async function (req, res) {
  try {
    let id = req.body.id;
    let nama = req.body.nama;
    let usia = req.body.usia;
    await db.collection('karyawan').doc(id).update({
      nama: nama,
      usia: usia
    });
    return res.status(200).json(rsMsg());
  } catch (e) {
    if (typeof e === 'string') {
      logger.error('error request data', e.toString());
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e.toString());
      return res.status(500).json(errMsg('10000'));
    }
  }
}

exports.fireDelete = async function (req, res) {
  try {
    let id = req.body.id
    await db.collection('karyawan').doc(id).delete();
    return res.status(200).json(rsMsg());
  } catch (e) {
    if (typeof e === 'string') {
      logger.error('error request data', e.toString());
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e.toString());
      return res.status(500).json(errMsg('10000', e.toString()));
    }
  }
}

exports.joinCollection = async function (req, res) {
  try {
    let responseKaryawan = [], responseAktivitas = [];
    let dataKaryawan = await db.collection('karyawan').get();
    dataKaryawan.forEach((hasil) => {
      responseKaryawan.push({
        id: hasil.id,
        nama: hasil.data().nama,
        usia: hasil.data().usia
      })
    })

    let dataAktivitas = await db.collection('aktivitas').get();
    dataAktivitas.forEach((hasil) => {
      responseAktivitas.push({
        id: hasil.id,
        account_id: hasil.data().account_id,
        aksi: hasil.data().aksi
      })
    })

    let datas = responseKaryawan.map(bin => {
      let { id } = bin;
      let aktivitas = responseAktivitas.filter(
        doc => doc.account_id === id
      );
      return { ...bin, aktivitas };
    });
    return res.status(200).json(rsMsg(datas));
  } catch (e) {
    if (typeof e === 'string') {
      logger.error('error request data', e.toString());
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e.toString());
      return res.status(500).json(errMsg('10000'));
    }
  }
}

exports.otherCollection = async function (req, res) {
  try {
    let id = req.params.id;
    let page = parseInt(req.params.page);
    let limit = parseInt(req.params.limit);
    let offset = limit * (page - 1);
    let responseAktivitas = [];

    let rcount = await db.collection('aktivitas').where('account_id', '==', id).get()
    let data = await db.collection('aktivitas').where('account_id', '==', id).limit(limit).offset(offset).get()
    data.forEach((hasil) => {
      responseAktivitas.push({
        id: hasil.id,
        ...hasil.data()
      })
    })
    if (responseAktivitas.length > 0) {
      return res.status(200).json(rsMsg({
        rows: responseAktivitas,
        currentPage: page,
        totalPage: Math.ceil(rcount.size / limit),
        totalData: rcount.size
      }))
    } else {
      return res.status(200).json(rsMsg({
        rows: [],
        currentPage: 1,
        totalPage: 1,
        totalData: 0
      }));
    }
  } catch (e) {
    if (typeof e === 'string') {
      logger.error('error request data', e.toString());
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e.toString());
      return res.status(500).json(errMsg('10000'));
    }
  }
}

exports.uploadFile = async function (req, res) {
  try {
    let isifile = require('../../../utils/base64')
    let id = uuidv4(),
      base64EncodedImageString = await isifile.base64();
    let imageBuffer = new Buffer.from(base64EncodedImageString, 'base64');
    let filetypes = await FileType.fromBuffer(imageBuffer);
    let mimeType = filetypes.mime;
    let ext = filetypes.ext;
    let fileName = `thumbnail64.${ext}`;
    let file = bucket.file(fileName);
    file.save(imageBuffer, {
      metadata: {
        contentType: mimeType,
        metadata: { firebaseStorageDownloadTokens: id }
      },
    }, ((error) => {
      if (error) {
        return res.status(500).json(errMsg('10000', e.toString()));
      }
      return res.status(200).json(rsMsg(`https://firebasestorage.googleapis.com/v0/b/projectname-63209.appspot.com/o/${fileName}?alt=media&token=${id}`));
    }));
  } catch (e) {
    if (typeof e === 'string') {
      logger.error('error request data', e.toString());
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e.toString());
      return res.status(500).json(errMsg('10000', e.toString()));
    }
  }
}

const Instagram = require('node-instagram').default;
const configIG = require('../../../setting').instagram;

exports.tokenIG = async function (req, res) {
  try {
    let instagram = new Instagram(configIG);
    let redirectUri = `http://localhost:${process.env.PORT}/api/v1/swagger/callback-token/`;
    res.redirect(instagram.getAuthorizationUrl(redirectUri, { scope: ['user_profile', 'user_media'] }));
  } catch (e) {
    if (typeof e === 'string') {
      logger.error('error request data', e);
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e);
      return res.status(500).json(errMsg('08000', e));
    }
  }
}

exports.callBackToken = async function (req, res) {
  try {
    let instagram = new Instagram(configIG);
    let redirectUri = `http://localhost:${process.env.PORT}/api/v1/swagger/callback-token/`;
    let code = req.query.code;
    let data = await instagram.authorizeUser(code, redirectUri);
    return res.status(200).json(rsMsg(data));
  } catch (e) {
    if (typeof e === 'string') {
      logger.error('error request data', e);
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e);
      return res.status(500).json(errMsg('08000', e));
    }
  }
}

exports.inquiryListContractCont = async function (req, res) {
  res.json({
    "header": {
      "code": "ESB-00-000",
      "message": "Request is successfully processed",
      "srcCode": "00",
      "srcMessage": "SUCCESS",
      "addInfo": {
        "requestId": "ADCK-201810241851289596",
        "requestTimestamp": "2019-04-02 12:46:42",
        "refNo": "20220831094026487764380017580963",
        "srcTarget": "0"
      }
    },
    "data": {
      "result": "SUCCESS",
      "data": {
        "contractNo": "010521318518",
        "contractObject": "DURABLE",
        "contractType": "ANNUITY",
        "totalCreditValue": "5514572",
        "pcCode": "005",
        "pcCodeDescription": "DURABLE             ",
        "productNoPol": "",
        "productBrand": "SAMSUNG",
        "productModel": "SMARTPHONE",
        "productModelDetail": "SMARTPHONE",
        "productStnkExpiryDate": "",
        "productFrameNo": "",
        "productMachineNo": "",
        "cmoName": "",
        "cfoName": "DANIEL CHANDRA SUPARMAN",
        "salesThrough": "Merchant Quantum",
        "firstInstallmentDate": "2022-03-28 00:00:00.000",
        "branchId": "0105",
        "branchName": "TANGERANG-ALAM SUTERA",
        "installmentPaymentStatus": "AKTIF",
        "installmentMonth": "528000",
        "installmentMin": "520523",
        "installmentMax": "528000",
        "remainInstallment": "2632523",
        "nextDueDate": "2022-10-28 00:00:00.000",
        "collectionDate": "",
        "tenureMonth": "12",
        "tenureX": "8",
        "penaltyAmount": "81840",
        "contractStatusCode": "00",
        "contractStatusDesc": "AKTIF",
        "oid": "01401925078172",
        "statusChangeDate": "2021-12-28 00:00:00.000",
        "jbDate": "",
        "jbScore": "",
        "jbDue": "FALSE",
        "contractVaNumber": "7755010521318518",
        "accountNoPegasus": "",
        "bankAccountPegasus": "",
        "accountNamePegasus": "",
        "statusReqPegasus": "NOT ACTIVE",
        "biayaBpkb": "0",
        "outsAdmin": "0",
        "outsDenda": "81840",
        "outsLain": "0",
        "noAplikasi": "0000210105032558",
        "costCenter": "0105",
        "ku": "03",
        "cp": "01",
        "prodId": "105"
      }
    }
  });
}

exports.inqueryEsspay = async function (req, res) {
  res.json({
    "header": {
      "code": "ESB-00-000",
      "message": "Permintaan berhasil diproses",
      "srcCode": "200",
      "srcMessage": "Success",
      "addInfo": {
        "requestId": "ADCK-201810241851289596",
        "requestTimestamp": "2019-04-02 12:46:42",
        "refNo": "20220828202601289116476941717486",
        "srcTarget": "0"
      }
    },
    "data": {
      "responseCode": "0",
      "msg": "Success",
      "RC1": [
        {
          "branchId": "0105",
          "contractNo": "010521318518",
          "name": "DANIEL CHANDRA SUPARMAN       ",
          "alamat": "JL SLIPI NO 3 004/005         ",
          "noSeri": "              ",
          "jenisPelanggan": "02",
          "angsuranNo": "8",
          "jatuhTempo": "28-10-2023",
          "nilaiTagihan": "553000",
          "nilaiAngsuran": "528000",
          "nilaiDenda": "25000",
          "statusAngsuran": "2",
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
          "nilaiMaksimal": "553000",
          "nilaiMinimal": "553000",
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
          "feeAdira": "2115",
          "feeSwitcher": "0",
          "feeCa": "3885",
          "totalFeeBase": "6000"
        }
      ]
    }
  });
}

exports.paymentEsspay = async function (req, res) {
  res.json({
    "header": {
      "code": "ESB-00-000",
      "message": "Permintaan berhasil diproses",
      "srcCode": "200",
      "srcMessage": "Success",
      "addInfo": {
        "requestId": "ADCK-20220831094204",
        "requestTimestamp": "2022-08-31 09:42:04",
        "refNo": "20220831094200293867084691778412",
        "srcTarget": "0"
      }
    },
    "data": {
      "pengesahanNo": await utils.scramble(moment().format('YYYYMMDDHHmmssSSS')),
      "codeResponse": "0",
      "msg": "Success"
    }
  });
}

exports.inquiryListContractOid = async function (req, res) {
  res.json({
    "header": {
      "code": "ESB-00-000",
      "message": "Permintaan berhasil diproses",
      "srcCode": "00",
      "srcMessage": "SUCCESS",
      "addInfo": {
        "requestId": "ADCK-201810241851289596",
        "requestTimestamp": "2019-04-02 12:46:42",
        "refNo": "20220831134619145271855614537385",
        "srcTarget": "0"
      }
    },
    "data": {
      "result": "SUCCESS",
      "data": [
        {
          "contractNo": "010521318518",
          "contractObject": "DURABLE",
          "contractType": "ANNUITY",
          "totalCreditValue": "5514572",
          "pcCode": "005",
          "pcCodeDescription": "DURABLE             ",
          "productNoPol": "",
          "productBrand": "SAMSUNG",
          "productModel": "SMARTPHONE",
          "productModelDetail": "SMARTPHONE",
          "productStnkExpiryDate": "",
          "productFrameNo": "",
          "productMachineNo": "",
          "cmoName": "",
          "cfoName": "DANIEL CHANDRA SUPARMAN",
          "salesThrough": "Merchant Quantum",
          "firstInstallmentDate": "2022-03-28 00:00:00.0",
          "branchId": "0105",
          "branchName": "TANGERANG-ALAM SUTERA",
          "installmentPaymentStatus": "AKTIF",
          "installmentMonth": "528000",
          "installmentMin": "520523",
          "installmentMax": "528000",
          "remainInstallment": "2632523",
          "nextDueDate": "2022-10-28 00:00:00.0",
          "collectionDate": "2022-08-26 11:09:33.0",
          "tenureMonth": "12",
          "tenureX": "8",
          "penaltyAmount": "81840",
          "contractStatusCode": "00",
          "contractStatusDesc": "AKTIF",
          "oid": "01401925078172",
          "statusChangeDate": "2021-12-28 00:00:00.0",
          "jbDate": "",
          "jbScore": "",
          "jbDue": "FALSE",
          "contractVaNumber": "7755010521318518",
          "accountNoPegasus": "",
          "bankAccountPegasus": "",
          "accountNamePegasus": "",
          "statusRekPegasus": "NOT ACTIVE",
          "biayaBpkb": "0",
          "outsAdmin": "0",
          "outsDenda": "81840",
          "outsLain": "0",
          "noAplikasi": "0000210105032558"
        },
        {
          "contractNo": "014019312612",
          "contractObject": "DURABLE",
          "contractType": "ANNUITY",
          "totalCreditValue": "7199100",
          "pcCode": "005",
          "pcCodeDescription": "DURABLE             ",
          "productNoPol": "",
          "productBrand": "FUJI FILM",
          "productModel": "CAMERA",
          "productModelDetail": "CAMERA",
          "productStnkExpiryDate": "",
          "productFrameNo": "",
          "productMachineNo": "",
          "cmoName": "",
          "cfoName": "DANIEL CHANDRA SUPARMAN",
          "salesThrough": "Merchant Quantum",
          "firstInstallmentDate": "2019-11-09 00:00:00.0",
          "branchId": "0140",
          "branchName": "BOGOR DURABLE",
          "installmentPaymentStatus": "NON AKTIF",
          "installmentMonth": "654000",
          "installmentMin": "644381",
          "installmentMax": "654000",
          "remainInstallment": "",
          "nextDueDate": "",
          "collectionDate": "2020-10-09 18:23:56.0",
          "tenureMonth": "12",
          "tenureX": "",
          "penaltyAmount": "0",
          "contractStatusCode": "01",
          "contractStatusDesc": "LUNAS NORMAL",
          "oid": "01401925078172",
          "statusChangeDate": "2019-10-04 00:00:00.0",
          "jbDate": "",
          "jbScore": "",
          "jbDue": "FALSE",
          "contractVaNumber": "7755014019312612",
          "accountNoPegasus": "",
          "bankAccountPegasus": "",
          "accountNamePegasus": "",
          "statusRekPegasus": "NOT ACTIVE",
          "biayaBpkb": "0",
          "outsAdmin": "0",
          "outsDenda": "0",
          "outsLain": "0",
          "noAplikasi": "0000190140013578"
        },
        {
          "contractNo": "012520824742",
          "contractObject": "DURABLE",
          "contractType": "ANNUITY",
          "totalCreditValue": "14499000",
          "pcCode": "005",
          "pcCodeDescription": "DURABLE             ",
          "productNoPol": "",
          "productBrand": "APPLE",
          "productModel": "SMARTPHONE",
          "productModelDetail": "SMARTPHONE",
          "productStnkExpiryDate": "",
          "productFrameNo": "IPHONE 11 125GB",
          "productMachineNo": "821360310041071",
          "cmoName": "DANIEL",
          "cfoName": "DANIEL CHANDRA SUPARMAN",
          "salesThrough": "Merchant Quantum",
          "firstInstallmentDate": "2020-11-09 00:00:00.0",
          "branchId": "0125",
          "branchName": "CIPUTAT-TANGSEL",
          "installmentPaymentStatus": "NON AKTIF",
          "installmentMonth": "1199000",
          "installmentMin": "1198938",
          "installmentMax": "1199000",
          "remainInstallment": "",
          "nextDueDate": "",
          "collectionDate": "2021-10-08 09:50:02.0",
          "tenureMonth": "12",
          "tenureX": "",
          "penaltyAmount": "0",
          "contractStatusCode": "01",
          "contractStatusDesc": "LUNAS NORMAL",
          "oid": "01401925078172",
          "statusChangeDate": "2020-09-17 13:47:46.0",
          "jbDate": "",
          "jbScore": "",
          "jbDue": "FALSE",
          "contractVaNumber": "7755012520824742",
          "accountNoPegasus": "",
          "bankAccountPegasus": "",
          "accountNamePegasus": "",
          "statusRekPegasus": "NOT ACTIVE",
          "biayaBpkb": "0",
          "outsAdmin": "0",
          "outsDenda": "0",
          "outsLain": "0",
          "noAplikasi": "0000200125035243"
        }
      ]
    }
  });
}

exports.inquiryOid = async function (req, res) {
  res.json({
    "header": {
      "code": "ESB-00-000",
      "message": "Permintaan berhasil diproses",
      "srcCode": "00",
      "srcMessage": "SUCCESS",
      "addInfo": {
        "requestId": "ADCK-02344991",
        "requestTimestamp": "2019-04-02 18:13:22",
        "refNo": "20220831135638854557926118974283",
        "srcTarget": "0"
      }
    },
    "data": {
      "result": "SUCCESS",
      "data": [
        {
          "oid": "01401925078172",
          "firstName": "",
          "lastName": "DANIEL CHANDRA SUPARMAN",
          "fullName": " DANIEL CHANDRA SUPARMAN",
          "prefferedName": "DANIEL CHANDRA SUPARMAN",
          "gender": "L",
          "martialStatus": "KAWIN                         ",
          "placeOfBirth": "JAKARTA",
          "motherName": " MARGARETHA",
          "customerRelativeName": " ",
          "ktpNo": "3173072901830012",
          "mobileNo": "085772906325",
          "phoneNo": "081315341225",
          "email": "d_ch07@yahoo.com",
          "employmentStatus": "TRUE",
          "customerProfessionCode": "03- PEG.SWASTA FORMAL",
          "relativeProfessionCode": "03 - PEG.SWASTA FORMAL             ",
          "employment": "PEG.SWASTA FORMAL",
          "subdistrict": "RAWA MEKAR JAYA",
          "district": "SERPONG",
          "address": "BSD SEVILLA PARK A5/8 000/000",
          "city": "KOTA TANGERANG SELATAN",
          "province": "PROVINSI BANTEN",
          "postalCode": "15310",
          "customerNieghbourhoodRtRw": "000/000",
          "customerKelurahaan": "RAWA MEKAR JAYA",
          "ktpAddress": "JL SLIPI NO 3 004/005",
          "ktpSubdistrict": "SLIPI",
          "ktpDistrict": "PALMERAH",
          "ktpCity": "WIL. KOTA JAKARTA BARAT",
          "ktpProvince": "PROVINSI DKI  JAKARTA",
          "ktpPostalCode": "11410",
          "avgMonthlyIncome": "33000000",
          "salary": "5000000",
          "avgMonthlyTransaction": "33000000",
          "employmentDuration": "60",
          "companyName": "PT ADIRA FINANCE",
          "companyIndustry": "",
          "companyLocation": "0394 WIL. KOTA JAKARTA SELATAN",
          "companyGeneralAddres": "BSD SEVILLA PARK A5/8",
          "customerCompanyCity": "0394 WIL. KOTA JAKARTA SELATAN",
          "customerCompanyProvince": "03 PROVINSI DKI  JAKARTA",
          "customerCompanyZipCode": "15310",
          "customerCompanyCountry": "01 Indonesia",
          "customerNpwp": "",
          "customerNameNpwp": "",
          "customerAlamatNpwp": ""
        }
      ]
    }
  });
}

exports.MiSubmitData = async function (req, res) {
  try {
    logger.debug('payload received for MiSubmitData...', JSON.stringify(req.body))
    let NamaTertanggung = req.body.NamaTertanggung
    let AlamatTertanggung = req.body.AlamatTertanggung
    let TempatLahirTertanggung = req.body.TempatLahirTertanggung
    let TanggalLahirTertanggung = req.body.TanggalLahirTertanggung
    let EmailTertanggung = req.body.EmailTertanggung
    let JenisKelaminTertanggung = req.body.JenisKelaminTertanggung
    let NomorIdentitasTertanggung = req.body.NomorIdentitasTertanggung
    let NomorHPTertanggung = req.body.NomorHPTertanggung
    let PekerjaanTertanggung = req.body.PekerjaanTertanggung
    let ProdukAsuransi = req.body.ProdukAsuransi
    let NomorReferensi = req.body.NomorReferensi
    let TanggalMulaiAsuransi = req.body.TanggalMulaiAsuransi
    let MerekKendaraan = req.body.MerekKendaraan
    let NomorPolisiKendaraan = req.body.NomorPolisiKendaraan
    let NomorRangkaKendaraan = req.body.NomorRangkaKendaraan
    let TahunPembuatanKendaraan = req.body.TahunPembuatanKendaraan
    let NomorPolis = `${await utils.scramble(moment().format('YYYYMMDDHHmmssSSS'))}`

    await AdrMiPolis.create({
      id: uuidv4(),
      nomor_polis: NomorPolis,
      nominal: 1,
      status_bayar: 0
    })

    res.json({
      "ResponseCode": "200",
      "ResponseDesc": `Data has been processed! Process ID : ${await utils.scramble(moment().format('mmssSSS'))}`,
      "ResponseData": {
        "Table": [
          {
            "NOMOR POLIS": NomorPolis,
            "NAMA TERTANGGUNG": NamaTertanggung,
            "ALAMAT TERTANGGUNG": AlamatTertanggung,
            "TEMPAT LAHIR TERTANGGUNG": TempatLahirTertanggung,
            "TANGGAL LAHIR TERTANGGUNG": moment(TanggalLahirTertanggung, 'MM/DD/YYYY').format('YYYY-MM-DD'),
            "EMAIL TERTANGGUNG": EmailTertanggung,
            "JENIS KELAMIN TERTANGGUNG": JenisKelaminTertanggung,
            "NOMOR IDENTITAS TERTANGGUNG": NomorIdentitasTertanggung,
            "NOMOR HP TERTANGGUNG": NomorHPTertanggung,
            "PEKERJAAN TERTANGGUNG": PekerjaanTertanggung,
            "PRODUK ASURANSI": ProdukAsuransi,
            "NOMOR REFERENSI": NomorReferensi,
            "TANGGAL MULAI ASURANSI": moment(TanggalMulaiAsuransi, 'MM/DD/YYYY').format('YYYY-MM-DD 00:00:00'),
            "TANGGAL SELESAI ASURANSI": moment('2030-01-01').format('YYYY-MM-DD HH:mm:ss'),
            "MEREK KENDARAAN": MerekKendaraan,
            "NOMOR POLISI KENDARAAN": NomorPolisiKendaraan,
            "NOMOR RANGKA KENDARAAN": NomorRangkaKendaraan,
            "TAHUN PEMBUATAN KENDARAAN": TahunPembuatanKendaraan,
            "PREMI ASURANSI": 1,
            "BS ID 1": `${await utils.scramble(moment().format('DDHHmmssSSS'))}`,
            "BS FEE 1": 0,
            "URL TOKOPEDIA": "www.google.com",
            "VA BCA": `${await utils.scramble(moment().format('YYYYMMDDHHmmssSSS'))}`,
          }
        ]
      }
    })
  } catch (e) {
    logger.error('error MiSubmitData...', e);
    return res.status(500).json(errMsg('10000', e));
  }
}

exports.MiGetPayment = async function (req, res) {
  try {
    logger.debug('payload received for MiGetPayment...', JSON.stringify(req.body))
    let Body = req.body.REQUESTDATA
    let NomorPolis = Body.Param1
    let status;

    let dataPolis = await AdrMiPolis.findOne({
      raw: true,
      where: {
        nomor_polis: NomorPolis
      }
    })
    if(!dataPolis){
      throw '10001'
    }

    if(dataPolis.status_bayar == '1'){
      status = 'PAID'
    }else{
      status = 'UNPAID'
    }

    res.json({
      "ResponseCode": "200",
      "ResponseDesc": "Datamaster has been loaded successfully",
      "ResponseData": {
        "Table": [
          {
            "POLICYNO": dataPolis.nomor_polis,
            "PREMIUM": dataPolis.nominal,
            "PAYMENT": dataPolis.nominal,
            "OUTSTANDING": dataPolis.nominal,
            "STATUS": status
          }
        ]
      }
    })
  } catch (e) {
    logger.error('error MiGetPayment...', e);
    return res.status(500).json(errMsg('10000', e));
  }
}

exports.MIAuthToken = async function (req, res) {
  return res.status(200).json({
    ResponseCode: "200",
    ResponseDesc: "Generate token successfully",
    ResponseData: {
      Table1: [
        {
          AuthToken: "APoiTOUU3P5y19RCoKNot0pXkSS4BDoq",
          ExpireOn: "2021-09-28T09:20:15.9256372"
        }
      ]
    }
  }
  )
}