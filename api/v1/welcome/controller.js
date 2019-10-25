'use strict';

const rsmg = require('../../../response/rs');
const utils = require('../../../utils/utils');
const moment = require('moment');
const uuidv4 = require('uuid/v4');
const logger = require('../../../config/logger');
const welmod = require('../../../modeldb/welmodel');

exports.well = async function (req, res) {
    try
    {
        let data = await welmod.findAll({
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