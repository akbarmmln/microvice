'use strict';

const rsmg = require('../../../response/rs');
const moment = require('moment');
const uuidv4 = require('uuid/v4');
const logger = require('../../../config/logger');

exports.ping = async function(req, res){
    try{
        return res.status(200).json(rsmg('ping'));
    }catch(e){
        if (typeof e === 'string') {
            logger.error('error request data', e.toString());
            return res.status(400).json(errMsg(e));
        } else {
            logger.error('internal server error', e.toString());
            return res.status(500).json(errMsg('10000', e));
        }
    }
}