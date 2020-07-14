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

exports.validationInput = async function(req, res){
  res.json({
    "header": {
      "code": "ESB-00-000",
      "message": "Permintaan berhasil diproses",
      "srcCode": "1",
      "srcMessage": "SUCCESS",
      "addInfo": {
        "requestId": "“ECM-01",
        "requestTimestamp": "2019-04-02 18:13:22",
        "refNo": "20200324094913047089541108997093",
        "srcTarget": "0"
      }
    },
    "data": {
      "contractNo": "123456",
      "dob": "11021980",
      "phoneNo": "08111788999",
  	  "email": "nadya.laura@adira.co.id",
    }
  })
}