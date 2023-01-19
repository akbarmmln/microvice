// 'use strict';

// const rsmg = require('../../../response/rs');
// const errMsg = require('../../../error/resError');
// const utils = require('../../../utils/utils');
// const moment = require('moment');
// const uuidv4 = require('uuid/v4');
// const logger = require('../../../config/logger');
// const pegawaimod = require('../../../modeldb/pegawaiModel');
// const transac = require('../../../config/db').Sequelize;
// const rp = require('promise-request-retry');
// const openQuery = require('../../../config/db').Sequelize;

// exports.showpegawai = async function (req, res) {
//     try
//     {
//         let data = await pegawaimod.findAll({
//             raw: true
//         });
//         logger.debug('sukses...');
//         return res.json(rsmg(data));
//     }
//     catch(e)
//     {
//         logger.error('error...', e);
//         return utils.returnErrorFunction(res, 'error to get data...', e);
//     }
// };

// exports.addpegawai = async function(req, res)
// {
//     try
//     {
//         let namapeg = req.body.namapeg;
//         let gajipeg = req.body.gajipeg;

//         await pegawaimod.create({
//             pegawai_id: uuidv4(),
//             pegawai_nama: namapeg,
//             pegawai_gaji: gajipeg
//         });

//         return res.json(rsmg());
//     }
//     catch(e)
//     {
//         logger.error('error...', e);
//         return utils.returnErrorFunction(res, 'error to get data...', e);
//     }
// };

// exports.deletepegawai = async function(req, res)
// {
//     try
//     {
//         let idpeg = req.body.idpeg;

//         await pegawaimod.destroy({
//             where: {pegawai_id: idpeg}
//         });

//         return res.json(rsmg());
//     }
//     catch(e)
//     {
//         logger.error('error...', e);
//         return utils.returnErrorFunction(res, 'error to get data...', e);
//     }  
// };

// exports.updatepegawai = async function(req, res)
// {
//     try
//     {
//         let idpeg = req.body.idpeg;
//         let namapeg = req.body.namapeg;
//         let gajipeg = req.body.gajipeg;

//         await pegawaimod.update({
//             pegawai_nama: namapeg,
//             pegawai_gaji: gajipeg
//         },{
//             where: {pegawai_id: idpeg}
//         });

//         return res.json(rsmg());
//     }
//     catch(e)
//     {
//         logger.error('error...', e);
//         return utils.returnErrorFunction(res, 'error to get data...', e);
//     }
// };

// exports.findpegawai = async function(req, res){
//     try{
//         let nik = req.body.nik;
//         let data = await pegawaimod.findOne({
//             raw: true,
//             where: {nik: nik}
//         });
//         if(!data){
//             throw '10001';
//         }
//         logger.debug('sukses...');
//         return res.json(rsmg(data));
//     }catch(e){
//         if (typeof e === 'string') {
//             logger.error('error request data', e.toString());
//             return res.status(400).json(errMsg(e));
//         } else {
//             logger.error('internal server error', e.toString());
//             return res.status(500).json(errMsg('10000', e));
//         }
//     }
// }

// exports.cobaRetry = async function(req, res){
//     try{
//         let a = await rp({
//             method: 'POST',
//             uri: "http://localhost:8099/api/v1/pegawai/find-pegawai",
//             body: {nik: req.body.nik},
//             json: true,
//             retry : 2
//         });
//         return res.json(rsmg(a));
//     }catch(e){
//         if (typeof e === 'string') {
//             logger.error('error request data', e.toString());
//             return res.status(400).json(errMsg(e));
//         } else {
//             logger.error('internal server error', e.toString());
//             return res.status(500).json(errMsg('10000', e));
//         }
//     }
// }

// exports.coba = async function(req, res){
//     try{
//         let data = await openQuery.query("SELECT * FROM pegawai",{ type: openQuery.QueryTypes.SELECT },{raw: true});
//         return res.status(200).json(data);
//     }catch(e){
//         logger.error('internal server error...', JSON.stringify(e));
//         return res.status(500).json(e);
//     }
// }