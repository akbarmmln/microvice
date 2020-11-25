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
      "data": [
        {
          "tagsname": "notags",
          "list": [
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
          ]
        },
        {
          "tagsname": "Polis Asuransi",
          "list": [
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
          ]
        },
        {
          "tagsname": "Ikhtisar Asuransi",
          "list": [
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
      ]
    }
  })
}

exports.downloadDocEcm = async function(req, res){
  return res.status(200).json(await utils.dataPDF());
}

exports.LISTECMREAL = async function (req, res) {
  res.status(200).json({
    "message": "success",
    "data": {
      "NOPKUNIT": "014019312612",
      "requestId": "AK 123 - 1606274083",
      "lists": [
        {
          "noPKUnit": "014019312612",
          "noAplikasiPayung": "-",
          "documentType": "KTPCustomer",
          "noKTP": "3173072901830012",
          "noAplikasiUnit": "0000190140013578",
          "mimeType": "image/jpeg",
          "oID": "10076771",
          "versionStatus": "1",
          "objectPath": "/Customer/Credit/Identitas Customer/0100 - Wilayah Area Jabodetabek/eKTP-13666120968_20191004130831.jpg",
          "dateCreated": "2020-10-04 13:36:09.223",
          "nama": "DANIEL CHANDRA SUPARMAN",
          "application": "STAR",
          "isCurrentVersion": "true",
          "id": "{2076DB22-43F7-C9B7-8643-6D957B900000}",
          "documentTitle": "eKTP-13666120968_20191004130831.jpg",
          "region": "0100 - Wilayah Area Jabodetabek",
          "noPKPayung": "-",
          "majorVersionNumber": "1"
        },
        {
          "noPKUnit": "014019312612",
          "noAplikasiPayung": "-",
          "documentType": "FotoSelfie",
          "noAplikasiUnit": "0000190140013578",
          "mimeType": "image/jpeg",
          "oID": "10076771",
          "versionStatus": "1",
          "objectPath": "/Customer/Credit/Foto/0100 - Wilayah Area Jabodetabek/selfie-photo-13666120968_20191004131047.jpg",
          "dateCreated": "2019-10-04 13:36:09.577",
          "application": "STAR",
          "isCurrentVersion": "true",
          "tanggalAplikasi": "2019-10-04 00:00:00.000",
          "id": "{FAC2C3C8-4859-C833-9886-6D957B900000}",
          "documentTitle": "selfie-photo-13666120968_20191004131047.jpg",
          "region": "0100 - Wilayah Area Jabodetabek",
          "noPKPayung": "-",
          "majorVersionNumber": "1"
        },
        {
          "noPKUnit": "014019312612",
          "noAplikasiPayung": "-",
          "documentType": "BeritaAcaraSerahTerimaBarangBuktiPengiriman",
          "noAplikasiUnit": "0000190140013578",
          "mimeType": "application/pdf",
          "oID": "10076771",
          "versionStatus": "1",
          "objectPath": "/Customer/Credit/Bukti Kepemilikan Rumah/BAST Credit/0100 - Wilayah Area Jabodetabek/TANDA-TERIMA-BARANG-13666120968.pdf",
          "dateCreated": "2019-10-04 13:36:09.963",
          "application": "STAR",
          "isCurrentVersion": "true",
          "tanggalAplikasi": "2019-10-04 00:00:00.000",
          "id": "{CF598103-6A59-C5BD-A536-6D957B900000}",
          "documentTitle": "TANDA-TERIMA-BARANG-13666120968.pdf",
          "region": "0100 - Wilayah Area Jabodetabek",
          "noPKPayung": "-",
          "majorVersionNumber": "1"
        },
        {
          "noPKUnit": "014019312612",
          "noAplikasiPayung": "-",
          "documentType": "InvoiceMerchant",
          "noAplikasiUnit": "0000190140013578",
          "mimeType": "application/pdf",
          "oID": "10076771",
          "versionStatus": "1",
          "objectPath": "/Customer/Credit/Dokumen Tagihan/0100 - Wilayah Area Jabodetabek/INVOICE-13666120968.pdf",
          "dateCreated": "2019-10-04 13:36:10.337",
          "application": "STAR",
          "isCurrentVersion": "true",
          "tanggalAplikasi": "2019-10-04 00:00:00.000",
          "id": "{5EEC1D6A-909D-CD7B-84D7-6D957BA00000}",
          "documentTitle": "INVOICE-13666120968.pdf",
          "region": "0100 - Wilayah Area Jabodetabek",
          "noPKPayung": "-",
          "majorVersionNumber": "1"
        },
        {
          "noPKUnit": "014019312612",
          "documentType": "PerjanjianKreditcustomer",
          "mimeType": "application/pdf",
          "versionStatus": "1",
          "objectPath": "/Customer/Credit/Perjanjian Pembiayaan/0100 - Wilayah Area Jabodetabek/E-Contract Document - 014019312612.pdf",
          "dateCreated": "2020-02-10 00:00:00.013",
          "nama": "DANIEL CHANDRA SUPARMAN",
          "application": "STAR",
          "isCurrentVersion": "true",
          "id": "{B1103845-9073-C024-8550-6F8E3A300000}",
          "documentTitle": "E-Contract Document - 014019312612.pdf",
          "region": "0100 - Wilayah Area Jabodetabek",
          "majorVersionNumber": "1"
        },
        {
          "noPKUnit": "014019312612",
          "documentType": "PerjanjianKreditcustomer",
          "mimeType": "application/pdf",
          "versionStatus": "1",
          "objectPath": "/Customer/Credit/Perjanjian Pembiayaan/0100 - Wilayah Area Jabodetabek/E-Contract Document - 014019312612.pdf",
          "dateCreated": "2020-01-10 13:52:57.013",
          "nama": "DANIEL CHANDRA SUPARMAN",
          "application": "STAR",
          "isCurrentVersion": "true",
          "id": "{B1103845-9073-C024-8550-6F8E3A300000}",
          "documentTitle": "E-Contract Document - 014019312612.pdf",
          "region": "0100 - Wilayah Area Jabodetabek",
          "majorVersionNumber": "1"
        },
        {
          "noPKUnit": "014019312612",
          "noAplikasiPayung": "0000200201003031",
          "documentType": "Riplay",
          "noAplikasiUnit": "0000200201003032",
          "nIKPIC": "10002386",
          "noKTP": "2345678909876543",
          "noNPWP": "000000000000000",
          "mimeType": "application/pdf",
          "oID": "02012000001904",
          "versionStatus": "1",
          "objectPath": "/Customer/Credit/Perjanjian Pembiayaan/RiplayRiplay.pdf",
          "dateCreated": "2020-10-17 02:13:03.363",
          "application": "RIPLAY",
          "isCurrentVersion": "true",
          "id": "{35EF1608-6A0D-C29A-87D9-7532D4600000}",
          "noDLC": "000195",
          "region": "0200",
          "documentTitle": "RiplayRiplay.pdf",
          "noPKPayung": "020120000560",
          "majorVersionNumber": "1"
        },
        {
          "noPKUnit": "014019312612",
          "noAplikasiPayung": "0000200201003031",
          "documentType": "Riplay",
          "noAplikasiUnit": "0000200201003032",
          "nIKPIC": "10002386",
          "noKTP": "2345678909876543",
          "noNPWP": "000000000000000",
          "mimeType": "application/pdf",
          "oID": "02012000001904",
          "versionStatus": "1",
          "objectPath": "/Customer/Credit/Perjanjian Pembiayaan/RiplayRiplay.pdf",
          "dateCreated": "2020-11-17 00:00:00.363",
          "application": "RIPLAY",
          "isCurrentVersion": "true",
          "id": "{35EF1608-6A0D-C29A-87D9-7532D4600000}",
          "noDLC": "000195",
          "region": "0200",
          "documentTitle": "RiplayRiplay.pdf",
          "noPKPayung": "020120000560",
          "majorVersionNumber": "1"
        },
      ],
      "page": 0,
      "message": "Document properties succesfully retrieved",
      "maxPage": 0,
      "timestamp": "2020-11-25 10:14:43",
      "status": 200,
      "dataCount": 5
    },
    "language": "EN",
    "timeStamp": "2020-11-25T10:14:43+07:00"
  })
}