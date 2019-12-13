'use strict';

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
                  "noAplikasi":"0000180321000454",
                  "kodeCabang":"0321",
                  "objectDesc":"MOTOR BARU",
                  "objectType":"BEBEK",
                  "objectBrand":"",
                  "objectModel":"SATRIA F150 FIGHTER",
                  "objectYear":"",
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
                  "lastKnownState":"INITIAL DATA ENTRY",
                  "tanggalStatus":"2019-10-02 17:39:23.0",
                  "tanggalAplikasi":"2018-01-08 00:00:00.0",
                  "tanggalOrder":"2018-01-08 00:00:00.0"
               },
               { 
                  "noAplikasiPayung":"0000180321000169",
                  "noAplikasi":"0000180321000179",
                  "kodeCabang":"0321",
                  "objectDesc":"MOTOR BARU",
                  "objectType":"BEBEK",
                  "objectBrand":"",
                  "objectModel":"SATRIA F150 FIGHTER",
                  "objectYear":"2016",
                  "lastKnownState":"INITIAL DATA ENTRY",
                  "tanggalStatus":"2019-10-02 17:39:23.0",
                  "tanggalAplikasi":"2018-01-08 00:00:00.0",
                  "tanggalOrder":"2018-01-08 00:00:00.0"
               },
               { 
                  "noAplikasiPayung":"0000180321003573",
                  "noAplikasi":"0000180321003574",
                  "kodeCabang":"0321",
                  "objectDesc":"MOTOR BARU",
                  "objectType":"BEBEK",
                  "objectBrand":"HONDA",
                  "objectModel":"SUPRA GTR 150 SPORTY",
                  "objectYear":"2016",
                  "lastKnownState":"",
                  "tanggalStatus":"",
                  "tanggalAplikasi":"2018-03-08 00:00:00.0",
                  "tanggalOrder":"2018-03-08 00:00:00.0"
               }
            ]
         }
        }
    })
}