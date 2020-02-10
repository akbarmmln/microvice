'use strict';
const moment = require('moment');
const rp = require('request-promise');

exports.regisLoyalty = async function(req, res){
   res.json({
      "header": {
          "code": "ESB-00-000",
          "message": "Permintaanberhasildiproses",
          "srcCode": "1",
          "srcMessage": "SUCCESS",
          "addInfo": {
              "requestId": "ERP-20194113173022707900008",
              "requestTimestamp": "2019-04-1114:37:05",
              "refNo": "20200210152456367569923553847194",
              "srcTarget": "0"
          }
      },
      "data": {
          "custOid": "02010231499007",
          "oidNo": "",
          "customerGender": "",
          "customerMaritalStatus": "",
          "customerEmployee": "",
          "customerIndustry": "",
          "customerReligion": "",
          "customerDateOfBirth": ""
      }
  });
}

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

exports.trackingOrder = async function(req, res){
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
               "lastKnownState":"GENERATE_PO",
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
               "lastKnownState":"DONE_READY_TO_PPD",
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
               "lastKnownState":"CREDIT APPROVAL LEVEL 1",
               "tanggalStatus":"2019-10-02 17:39:23.0",
               "tanggalAplikasi":"2018-01-08 00:00:00.0",
               "tanggalOrder":"2018-01-08 00:00:00.0"
            }
         ]
      }
   })
}