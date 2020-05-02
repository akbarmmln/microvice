'use strict';

require('dotenv').config();
const utils = require('../utils/utils');
const logger = require('./logger');

exports.sendGridMailer = async function (mailObject) {
  try {
    mailObject.from = process.env.SENDGRID_FROM_EMAIL;

    return utils.sendGridMailer(mailObject.from, mailObject.to, mailObject.subject, mailObject.html, mailObject.attachments);

  } catch (e) {
    logger.error('failed to send email', e.toString());
    throw e;
  }
}