'use strict';
const moment = require('moment');
const rp = require('request-promise');

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
                "createdDate": "2020-03-26T02:35:44.950Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-26T02:44:37.265Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-26T02:45:11.932Z"
              }
            ]
          },
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
            "installment": 348000.0,
            "orderId": "1204575409",
            "orderDate": "2020-03-23T12:09:27Z",
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
                "createdDate": "2020-03-23T11:47:46.215Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-23T11:53:56.217Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-23T11:54:31.662Z"
              }
            ]
          },
          {
            "merchantId": "6",
            "merchantName": "Hartono",
            "merchantLogo": null,
            "merchantTimeout": 120,
            "merchantIsTimeout": true,
            "productName": "Single Split",
            "qty": "1",
            "total": 3539000.0,
            "tMinusDP": 3539000.0,
            "installment": 455000.0,
            "orderId": "22172",
            "orderDate": "2020-03-20T07:57:48Z",
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
                "createdDate": "2020-03-20T08:00:22.282Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-20T08:02:54.162Z"
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
            "installment": 585000.0,
            "orderId": "21962",
            "orderDate": "2020-03-19T04:05:03Z",
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
                "createdDate": "2020-03-19T04:06:53.692Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-19T04:08:21.950Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-19T04:08:57.926Z"
              }
            ]
          },
          {
            "merchantId": "6",
            "merchantName": "Hartono",
            "merchantLogo": null,
            "merchantTimeout": 120,
            "merchantIsTimeout": true,
            "productName": "LED TV",
            "qty": "1",
            "total": 4559000.0,
            "tMinusDP": 4559000.0,
            "installment": 576000.0,
            "orderId": "21458",
            "orderDate": "2020-03-16T04:54:15Z",
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
                "createdDate": "2020-03-16T05:27:59.546Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-16T05:29:33.705Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-16T05:30:01.161Z"
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
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-13T02:55:48.273Z"
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
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-12T12:57:10.779Z"
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
            "orderId": "21016",
            "orderDate": "2020-03-12T11:46:31Z",
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
                "createdDate": "2020-03-12T11:47:32.349Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-12T11:49:08.108Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-12T11:49:50.975Z"
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
            "installment": 585000.0,
            "orderId": "21013",
            "orderDate": "2020-03-12T11:22:21Z",
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
                "createdDate": "2020-03-12T11:23:32.274Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-12T11:25:41.208Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-12T11:26:17.956Z"
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
            "orderId": "20994",
            "orderDate": "2020-03-12T09:56:24Z",
            "applicationNo": "0000200113000043",
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
                "createdDate": "2020-03-12T09:58:09.489Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-12T10:01:01.121Z"
              },
              {
                "applicationStatusCd": "DATA_VALIDATION",
                "createdDate": "2020-03-12T10:10:48.686Z"
              },
              {
                "applicationStatusCd": "DOC_SIGN",
                "createdDate": "2020-03-12T10:13:39.597Z"
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
               "lastKnownState":"APPROVE_DOC_VER LEVEL 10",
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