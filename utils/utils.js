const logger = require('../config/logger');
const errMsg = require('../error/resError');

exports.returnErrorFunction = function (resObject, errorMessageLogger, errorObject) {
  if (typeof errorObject === 'string') {
    logger.error(errorMessageLogger, errorObject.toString());
    return resObject.status(400).json(errMsg(errorObject));
  } else {
    logger.error(errorObject.toString());
    return resObject.status(500).json(errMsg('10000'));
  }
};