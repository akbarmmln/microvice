'use strict';

const moment = require('moment');
const uuidv4 = require('uuid/v4');
const logger = require('../../../config/logger');
const rsmg = require('../../../response/rs');
const errMsg = require('../../../error/resError');
const mailer = require('../../../config/mailer');
const pegawai = require('../../../model/pegawai');

exports.ping = async function(req, res){
    try{
        logger.debug(`payload received for ping..., ${JSON.stringify(req.body)}`)
        let mailObject = {
            to: 'akbarmmln@gmail.com',
            subject: `testing`,
            html: 'PING',
        };
        try{
            await mailer.sendGridMailer(mailObject);
            logger.debug('send mail success');
        }catch(e){
            logger.error(`send mail failed, ${e}`);
            throw '10013';
        }
        return res.status(200).json(rsmg('ping'));
    }catch(e){
        if (typeof e === 'string') {
            logger.error(`error request data..., ${e.toString()}`);
            return res.status(400).json(errMsg(e));
        } else {
            logger.error(`internal server error..., ${e.toString()}`);
            return res.status(500).json(errMsg('10000', e));
        }
    }
}