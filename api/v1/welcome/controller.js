'use strict';

const rsmg = require('../../../response/rs');
const utils = require('../../../utils/utils');
const moment = require('moment');
const uuidv4 = require('uuid/v4');
const logger = require('../../../config/logger');
const welmod = require('../../../modeldb/welmodel');

exports.well = async function (req, res) {
    return res.json(rsmg('wellcome...'));
}; 