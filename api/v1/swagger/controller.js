'use strict';
const moment = require('moment');
const rp = require('request-promise');

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