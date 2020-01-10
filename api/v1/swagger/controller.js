'use strict';
const moment = require('moment');
const rp = require('request-promise');

exports.trackingOrder = async function(req, res){
    res.json({ 
        "result": "success",
        "data": {
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
                  "objectModel":"JUPITER Z FI",
                  "objectYear":"2016",
                  "lastKnownState":"INITIAL DATA ENTRY",
                  "tanggalStatus":"2019-10-02 17:39:23.0",
                  "tanggalAplikasi":"2018-01-08 00:00:00.0",
                  "tanggalOrder":"2018-01-08 00:00:00.0"
               },
               {
                  "noAplikasiPayung":"0000180321000169",
                  "noAplikasi":"0000180321000170",
                  "kodeCabang":"0321",
                  "objectDesc":"MOTOR BEKAS",
                  "objectType":"BEBEK",
                  "objectBrand":"YAMAHA",
                  "objectModel":"JUPITER Z FI",
                  "objectYear":"2016",
                  "lastKnownState":"SURVEY RESULT ENTRY",
                  "tanggalStatus":"2019-10-02 17:39:23.0",
                  "tanggalAplikasi":"2018-01-08 00:00:00.0",
                  "tanggalOrder":"2018-01-08 00:00:00.0"
               },
               {
                  "noAplikasiPayung":"0000180321000169",
                  "noAplikasi":"0000180321000170",
                  "kodeCabang":"0321",
                  "objectDesc":"MOTOR BEKAS",
                  "objectType":"BEBEK",
                  "objectBrand":"YAMAHA",
                  "objectModel":"JUPITER Z FI",
                  "objectYear":"2016",
                  "lastKnownState":"APPROVE LEVEL 8",
                  "tanggalStatus":"2019-10-02 17:39:23.0",
                  "tanggalAplikasi":"2018-01-08 00:00:00.0",
                  "tanggalOrder":"2018-01-08 00:00:00.0"
               },
               {
                  "noAplikasiPayung":"0000180321000169",
                  "noAplikasi":"0000180321000170",
                  "kodeCabang":"0321",
                  "objectDesc":"MOTOR BEKAS",
                  "objectType":"BEBEK",
                  "objectBrand":"YAMAHA",
                  "objectModel":"JUPITER Z FI",
                  "objectYear":"2016",
                  "lastKnownState":"GENERATE_PO",
                  "tanggalStatus":"2019-10-02 17:39:23.0",
                  "tanggalAplikasi":"2018-01-08 00:00:00.0",
                  "tanggalOrder":"2018-01-08 00:00:00.0"
               },
               {
                  "noAplikasiPayung":"0000180321000169",
                  "noAplikasi":"0000180321000170",
                  "kodeCabang":"0321",
                  "objectDesc":"MOTOR BEKAS",
                  "objectType":"BEBEK",
                  "objectBrand":"YAMAHA",
                  "objectModel":"JUPITER Z FI",
                  "objectYear":"2016",
                  "lastKnownState":"DONE_READY_TO_PPD",
                  "tanggalStatus":"2019-10-02 17:39:23.0",
                  "tanggalAplikasi":"2018-01-08 00:00:00.0",
                  "tanggalOrder":"2018-01-08 00:00:00.0"
               },
               {
                  "noAplikasiPayung":"0000180321000169",
                  "noAplikasi":"0000180321000170",
                  "kodeCabang":"0321",
                  "objectDesc":"MOTOR BEKAS",
                  "objectType":"BEBEK",
                  "objectBrand":"YAMAHA",
                  "objectModel":"JUPITER Z FI",
                  "objectYear":"2016",
                  "lastKnownState":"REJECT LEVEL 2",
                  "tanggalStatus":"2019-10-02 17:39:23.0",
                  "tanggalAplikasi":"2018-01-08 00:00:00.0",
                  "tanggalOrder":"2018-01-08 00:00:00.0"
               },
               {
                  "noAplikasiPayung":"0000180321000169",
                  "noAplikasi":"0000180321000170",
                  "kodeCabang":"0321",
                  "objectDesc":"MOTOR BEKAS",
                  "objectType":"BEBEK",
                  "objectBrand":"YAMAHA",
                  "objectModel":"JUPITER Z FI",
                  "objectYear":"2016",
                  "lastKnownState":"123",
                  "tanggalStatus":"2019-10-02 17:39:23.0",
                  "tanggalAplikasi":"2018-01-08 00:00:00.0",
                  "tanggalOrder":"2018-01-08 00:00:00.0"
               }
            ]
         }
        }
    })
}