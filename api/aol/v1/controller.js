'use strict';
const utils = require('../../../utils/utils');

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

exports.listDocEcm = async function(req, res){
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
      "result": "SUCCESS",
      "data": {
        "notags": [
          {
            "doc_id": "ecm-01",
            "documents_name": "Perjanjian Pembiayaan",
            "status_doc": "1"
          },
          {
            "doc_id": "ecm-02",
            "documents_name": "Ringkasan Informasi Produk & Layanan",
            "status_doc": "1"
          },
          {
            "doc_id": "ecm-03",
            "documents_name": "Surat Kesepakatan Konsumen",
            "status_doc": "1"
          },
          {
            "doc_id": "ecm-04",
            "documents_name": "Salinan BPKB",
            "status_doc": "1"
          }
        ],
        "Polis Asuransi": [
          {
            "doc_id": "ecm-05",
            "documents_name": "Polis Asuransi Unit",
            "status_doc": "1"
          },
          {
            "doc_id": "ecm-06",
            "documents_name": "Polis Asuransi PA",
            "status_doc": "1"
          },
          {
            "doc_id": "ecm-07",
            "documents_name": "Polis Asuransi Jiwa",
            "status_doc": "1"
          }
        ],
        "Ikhtisar Asuransi": [
          {
            "doc_id": "ecm-08",
            "documents_name": "Ikhtisar Asuransi Unit",
            "status_doc": "1"
          },
          {
            "doc_id": "ecm-09",
            "documents_name": "Ikhtisar Asuransi PA",
            "status_doc": "1"
          },
          {
            "doc_id": "ecm-10",
            "documents_name": "Ikhtisar Asuransi Jiwa",
            "status_doc": "1"
          }
        ]
      }
    }
  })
}