'use strict';

exports.inquiryOidByNikOrPhoneNumber = async function(req, res){
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
      "custOid": "02010231499007"
    }
  });
}