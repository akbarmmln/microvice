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

exports.contractList = async function(req, res){
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

exports.trackingOrderStar = async function(req, res){
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

exports.trackingOrderAction = async function(req, res){
    res.json({ 
      "header":{ 
         "code":"ESB-00-000",
         "message":"Permintaan berhasil diproses",
         "srcCode":"1",
         "srcMessage":"Sukses",
         "addInfo":{ 
            "srcTarget":"0"
         }
      },
      "data":{ 
         "rc1":[
            {
               "noAplikasiPayung":"0000180321000169",
               "noAplikasi":"0000180321000170",
               "kodeCabang":"0321",
               "objectDesc":"MOTOR BEKAS",
               "objectType":"BEBEK",
               "objectBrand":"YAMAHA",
               "objectModel":"JUPITER Z F0",
               "objectYear":"2016",
               "lastKnownState":"CANCEL PO",
               "tanggalStatus":"2019-10-02 17:39:23.0",
               "tanggalAplikasi":"2018-01-08 00:00:00.0",
               "tanggalOrder":"2018-01-08 00:00:00.0"
            },
            {
               "noAplikasiPayung":"0000180321000169",
               "noAplikasi":"0000180321000171",
               "kodeCabang":"0321",
               "objectDesc":"MOTOR BEKAS",
               "objectType":"BEBEK",
               "objectBrand":"YAMAHA",
               "objectModel":"JUPITER Z F1",
               "objectYear":"2016",
               "lastKnownState":"INITIAL DATA ENTRY",
               "tanggalStatus":"2019-10-02 17:39:23.0",
               "tanggalAplikasi":"2018-01-08 00:00:00.0",
               "tanggalOrder":"2018-01-08 00:00:00.0"
            },
            {
               "noAplikasiPayung":"0000180321000169",
               "noAplikasi":"0000180321000172",
               "kodeCabang":"0321",
               "objectDesc":"MOTOR BEKAS",
               "objectType":"BEBEK",
               "objectBrand":"YAMAHA",
               "objectModel":"JUPITER Z F2",
               "objectYear":"2016",
               "lastKnownState":"SURVEY RESULT ENTRY",
               "tanggalStatus":"2019-10-02 17:39:23.0",
               "tanggalAplikasi":"2018-01-08 00:00:00.0",
               "tanggalOrder":"2018-01-08 00:00:00.0"
            },
            {
               "noAplikasiPayung":"0000180321000169",
               "noAplikasi":"0000180321000173",
               "kodeCabang":"0321",
               "objectDesc":"MOTOR BEKAS",
               "objectType":"BEBEK",
               "objectBrand":"YAMAHA",
               "objectModel":"JUPITER Z F3",
               "objectYear":"2016",
               "lastKnownState":"APPROVE LEVEL 8",
               "tanggalStatus":"2019-10-02 17:39:23.0",
               "tanggalAplikasi":"2018-01-08 00:00:00.0",
               "tanggalOrder":"2018-01-08 00:00:00.0"
            },
            {
               "noAplikasiPayung":"0000180321000169",
               "noAplikasi":"0000180321000174",
               "kodeCabang":"0321",
               "objectDesc":"MOBIL BARU",
               "objectType":"MINIBUS",
               "objectBrand":"SUZUKI",
               "objectModel":"ERTIGA GL M/T",
               "objectYear":"2018",
               "lastKnownState":"DONE READY TO PPD ",
               "tanggalStatus":"2019-10-02 17:39:23.0",
               "tanggalAplikasi":"2018-01-08 00:00:00.0",
               "tanggalOrder":"2018-01-08 00:00:00.0"
            },
            {
               "noAplikasiPayung":"0000180321000169",
               "noAplikasi":"0000180321000175",
               "kodeCabang":"0321",
               "objectDesc":"MOTOR BARU",
               "objectType":"SCOOTERMATIC",
               "objectBrand":"HONDA",
               "objectModel":"NEWVARIOTECHNOCBS FI",
               "objectYear":"2018",
               "lastKnownState":"READY TO PPD ",
               "tanggalStatus":"2019-10-02 17:39:23.0",
               "tanggalAplikasi":"2018-01-08 00:00:00.0",
               "tanggalOrder":"2018-01-08 00:00:00.0"
            },
            {
               "noAplikasiPayung":"0000180321000169",
               "noAplikasi":"0000180321000176",
               "kodeCabang":"0321",
               "objectDesc":"DURABLE",
               "objectType":"BED ROOM",
               "objectBrand":"SPRING BED",
               "objectModel":"SPRINGBED",
               "objectYear":"",
               "lastKnownState":"REJECT LEVEL 2",
               "tanggalStatus":"2019-10-02 17:39:23.0",
               "tanggalAplikasi":"2018-01-08 00:00:00.0",
               "tanggalOrder":"2018-01-08 00:00:00.0"
            },
            {
               "noAplikasiPayung":"0000180321000169",
               "noAplikasi":"0000180321000177",
               "kodeCabang":"0321",
               "objectDesc":"MOTOR BEKAS",
               "objectType":"BEBEK",
               "objectBrand":"YAMAHA",
               "objectModel":"JUPITER Z F7",
               "objectYear":"2016",
               "lastKnownState":"DONE READY TO PPD",
               "tanggalStatus":"2019-10-02 17:39:23.0",
               "tanggalAplikasi":"2018-01-08 00:00:00.0",
               "tanggalOrder":"2018-01-08 00:00:00.0"
            }
         ]
      }
   })
}

exports.trackingOrderDop = async function(req, res){
  res.json({
    "result": "success",
    "data": "[{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"ORDER BARU\",\"tanggalStatus\":\"1/18/2019 6:12:19 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"PROSES SURVEY\",\"tanggalStatus\":\"1/18/2019 6:12:38 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"PROSES BANDING\",\"tanggalStatus\":\"1/18/2019 6:13:37 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"PROSES PERSETUJUAN\",\"tanggalStatus\":\"1/18/2019 6:22:21 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"RETURN DOKUMEN\",\"tanggalStatus\":\"1/18/2019 6:23:12 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"DIBATALKAN\",\"tanggalStatus\":\"2/6/2019 4:20:20 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"DITOLAK\",\"tanggalStatus\":\"2/6/2019 4:21:17 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"DITOLAK FINAL\",\"tanggalStatus\":\"2/6/2019 4:21:43 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"CETAK PO\",\"tanggalStatus\":\"2/6/2019 4:23:36 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"DOKUMEN PENAGIHAN\",\"tanggalStatus\":\"2/6/2019 4:26:30 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"PROSES PENAGIHAN\",\"tanggalStatus\":\"2/6/2019 5:58:12 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"CAIR\",\"tanggalStatus\":\"2/6/2019 5:58:22 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"INPUT DATA\",\"tanggalStatus\":\"2/6/2019 5:58:32 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"},{\"oid\":\"01361516596755\",\"noaplikasidop\":\"7775190136009077\",\"kodeCabang\":\"0136\",\"objectDesc\":\"MOTOR BEKAS\",\"objectType\":\"SPORT\",\"objectBrand\":\"HONDA\",\"objectModel\":\"CBR 150 R\",\"objectYear\":\"2012\",\"lastKnownState\":\"INPUT DATA\",\"tanggalStatus\":\"2/6/2019 5:58:45 PM\",\"tanggalAplikasi\":\"1/18/2019 5:25:23 PM\",\"tanggalOrder\":\"1/18/2019 5:25:23 PM\"}]"
  })
}

exports.firepost = async function(req, res){
  try{
    let nama = req.body.nama;
    let usia = req.body.usia;
    await db.collection('karyawan').doc(uuidv4()).create({
      nama: nama,
      usia: usia,
    });
    return res.status(200).json(rsMsg());
  }catch(e){
    logger.error('error...', e);
    return res.status(500).json(e.toString());
  }
}

exports.getAllData = async function(req, res){
  try{
    let response = [];
    let data = await db.collection('karyawan').get();
    data.forEach((hasil)=>{
      response.push({
        id: hasil.id,
        nama: hasil.data().nama,
        usia: hasil.data().usia
      })
    })
    return res.status(200).json(rsMsg(response));
  }catch(e){
    logger.error('error...', e);
    return res.status(500).json(e.toString());
  }
}

exports.fireGetByID = async function(req, res){
  try{
    let id = req.params.id;
    let data = await db.collection('karyawan').doc(id).get();
    let response = data.data();
    if(!response){
      throw '08011';
    }
    return res.status(200).json(rsMsg({
      id: id,
      ...response
    }));
  }catch(e){
    if (typeof e === 'string') {
      logger.error('error request data', e.toString());
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e.toString());
      return res.status(500).json(errMsg('10000'));
    }
  }
}

exports.fireUpdate = async function(req, res){
  try{
    let id = req.body.id;
    let nama = req.body.nama;
    let usia = req.body.usia;
    await db.collection('karyawan').doc(id).update({
      nama: nama,
      usia: usia
    });
    return res.status(200).json(rsMsg());
  }catch(e){
    if (typeof e === 'string') {
      logger.error('error request data', e.toString());
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e.toString());
      return res.status(500).json(errMsg('10000'));
    }
  }
}

exports.fireDelete = async function(req, res){
  try{
    let id = req.body.id
    await db.collection('karyawan').doc(id).delete();
    return res.status(200).json(rsMsg());
  }catch(e){
    if (typeof e === 'string') {
      logger.error('error request data', e.toString());
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e.toString());
      return res.status(500).json(errMsg('10000', e.toString()));
    }
  }
}

exports.joinCollection = async function(req, res){
  try{
    let responseKaryawan = [], responseAktivitas = [];
    let dataKaryawan = await db.collection('karyawan').get();
    dataKaryawan.forEach((hasil)=>{
      responseKaryawan.push({
        id: hasil.id,
        nama: hasil.data().nama,
        usia: hasil.data().usia
      })
    })

    let dataAktivitas = await db.collection('aktivitas').get();
    dataAktivitas.forEach((hasil)=>{
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
  }catch(e){
    if (typeof e === 'string') {
      logger.error('error request data', e.toString());
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e.toString());
      return res.status(500).json(errMsg('10000'));
    }
  }
}

exports.otherCollection = async function(req, res){
  try{
    let id = req.params.id;
    let page = parseInt(req.params.page);
    let limit = parseInt(req.params.limit);
    let offset = limit * (page - 1);
    let responseAktivitas = [];

    let rcount = await db.collection('aktivitas').where('account_id', '==', id).get()
    let data = await db.collection('aktivitas').where('account_id', '==', id).limit(limit).offset(offset).get()
    data.forEach((hasil)=>{
      responseAktivitas.push({
        id: hasil.id,
        ...hasil.data()
      })
    })
    if(responseAktivitas.length > 0){
      return res.status(200).json(rsMsg({
        rows: responseAktivitas,
        currentPage: page,
        totalPage: Math.ceil(rcount.size / limit),
        totalData: rcount.size
      }))
    }else{
      return res.status(200).json(rsMsg({
        rows: [],
        currentPage: 1,
        totalPage: 1,
        totalData: 0
      }));
    }
  }catch(e){
    if (typeof e === 'string') {
      logger.error('error request data', e.toString());
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e.toString());
      return res.status(500).json(errMsg('10000'));
    }
  }
}

exports.uploadFile = async function(req, res){
  try{
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
        metadata: {firebaseStorageDownloadTokens: id}
      },
    },((error) => {
      if (error) {
        return res.status(500).json(errMsg('10000', e.toString()));
      }
      return res.status(200).json(rsMsg(`https://firebasestorage.googleapis.com/v0/b/projectname-63209.appspot.com/o/${fileName}?alt=media&token=${id}`));
    }));
  }catch(e){
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

exports.tokenIG = async function(req, res){
  try{
    let instagram = new Instagram(configIG);
    let redirectUri = `http://localhost:${process.env.PORT}/api/v1/swagger/callback-token`;
    let a = await instagram.getAuthorizationUrl(redirectUri, { scope: ['basic'] })
    return res.status(200).json(a);
  }catch(e){
    if (typeof e === 'string') {
      logger.error('error request data', e);
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e);
      return res.status(500).json(errMsg('08000', e));
    }
  }
}

exports.callBackToken = async function(req, res){
  try{
    let instagram = new Instagram(configIG);
    let redirectUri = `http://localhost:${process.env.PORT}/api/v1/swagger/callback-token`;
    let code = req.query.code;
    let data = await instagram.authorizeUser(code, redirectUri);
    return res.status(200).json(rsMsg(data));
  }catch(e){
    if (typeof e === 'string') {
      logger.error('error request data', e);
      return res.status(400).json(errMsg(e));
    } else {
      logger.error('internal server error', e);
      return res.status(500).json(errMsg('08000', e));
    }
  }
}