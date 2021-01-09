'use strict';

const moment = require('moment');
const uuidv4 = require('uuid/v4');
// const logger = require('../../../config/logger');
const rsmg = require('../../../response/rs');
const errMsg = require('../../../error/resError');

exports.ping = async function(req, res){
    try{
        console.log(`${moment().format('YYYY-MM-DD HH:mm:ss.SSS')} - payload received for ping...`, JSON.stringify(req.body));
        return res.status(200).json(rsmg('ping'));
    }catch(e){
        if (typeof e === 'string') {
            console.log('error request data', e.toString());
            return res.status(400).json(errMsg(e));
        } else {
            console.log('internal server error', e.toString())
            return res.status(500).json(errMsg('10000', e));
        }
    }
}