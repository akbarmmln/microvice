const moment = require('moment');
const errCode = require('./errCode');

function resError(code) {
  return {
    message: 'unsuccessful',
    err_code: code,
    err_msg: errCode[code],
    language: 'EN',
    timestamp: moment().format()
  }
}

module.exports = resError;