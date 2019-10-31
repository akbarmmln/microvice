'use strict';

const rsmg = require('../../../response/rs');
const utils = require('../../../utils/utils');
const moment = require('moment');
const uuidv4 = require('uuid/v4');
const logger = require('../../../config/logger');
const pegawaimod = require('../../../modeldb/pegawaiModel');
const transac = require('../../../config/db').Sequelize;

exports.showpegawai = async function (req, res) {
    try
    {
        let data = await pegawaimod.findAll({
            raw: true
        });
        logger.debug('sukses...');
        return res.json(rsmg(data));
    }
    catch(e)
    {
        logger.error('error...', e);
        return utils.returnErrorFunction(res, 'error to get data...', e);
    }
};

exports.deletepegawai = async function(req, res)
{
    try
    {
        let idpeg = req.body.idpeg;

        await pegawaimod.destroy({
            where: {pegawai_id: idpeg}
        });

        return res.json(rsmg());
    }
    catch(e)
    {
        logger.error('error...', e);
        return utils.returnErrorFunction(res, 'error to get data...', e);
    }  
};

exports.updatepegawai = async function(req, res)
{
    try
    {
        let idpeg = req.body.idpeg;
        let namapeg = req.body.namapeg;
        let gajipeg = req.body.gajipeg;

        await pegawaimod.update({
            pegawai_nama: namapeg,
            pegawai_gaji: gajipeg
        },{
            where: {pegawai_id: idpeg}
        });

        return res.json(rsmg());
    }
    catch(e)
    {
        logger.error('error...', e);
        return utils.returnErrorFunction(res, 'error to get data...', e);
    }
};