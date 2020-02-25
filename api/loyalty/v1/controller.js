'use strict';

exports.registrationLoyalty = async function(req, res){
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
      "customerInfo": [
        {
          "oidNo": "",
          "customerGender": "",
          "customerMaritalStatus": "",
          "customerEmployee": "",
          "customerIndustry": "",
          "customerReligion": "",
          "customerDateOfBirth": "",
          "noKtp": "34345665556",
          "noHp": "08128489294"
        }
      ]
    }
  });
}

exports.inquiryPointTiering = async function(req, res){
  res.json({
    "header": {
      "code": "ESB-00-000",
      "message": "Permintaan berhasil diproses",
      "srcCode": "1",
      "srcMessage": "SUCCESS",
      "addInfo": {
        "requestId": "ERP-20194113173022707900008",
        "requestTimestamp": "2019-04-11 14:37:05",
        "refNo": "20200213141157408402905004025502"
      }
    },
    "data": {
      "totalCurrentPoint": "500",
      "nearestExpiredPointAndDate": "100 (20012020)",
      "tiering": "emas"
    }
  });
}