const logger = require('../config/logger');
const errMsg = require('../error/resError');
const nodemailer = require('nodemailer');

exports.returnErrorFunction = function (resObject, errorMessageLogger, errorObject) {
  if (typeof errorObject === 'string') {
    logger.error(errorMessageLogger, errorObject);
    return resObject.status(400).json(errMsg(errorObject));
  } else if (errorObject.error) {
    logger.error(errorObject.error.err_code, errorObject);
    return resObject.status(500).json(errorObject.error);
  } else {
    logger.error(errorObject);
    return resObject.status(500).json(errMsg('04000'));
  }
};

exports.sendGridMailer = async function (from, to, subject, body, attachments, bodyType = 'html') {
  try {
    let transporter = nodemailer.createTransport({
      // host: process.env.SENDGRID_SMTP_HOST,
      // port: process.env.SENDGRID_PORT,
      // secure: false,
      service: 'gmail',
      auth: {
        user: 'akbarmmln@gmail.com',
        pass: 'akbarakbar'
      }
    });
    let sendProps = {
      from: from,
      to: to,
      subject: subject
    };

    if (bodyType !== 'html') {
      sendProps.text = body;
    } else {
      sendProps.html = body;
    }
    if(attachments){
      sendProps.attachments = attachments
    }
    let info = await transporter.sendMail(sendProps);
    return info;
  } catch (e) {
    throw e;
  }
}