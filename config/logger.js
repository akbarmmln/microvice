// 'use strict';
require('dotenv').config();
// const log4js = require('log4js');
// const logger = log4js.getLogger();
// logger.level = 'debug';
// module.exports = logger;

const moment = require('moment');
const fs = require("fs");
const Logger = {};
let loggerStream;
if(process.env.ENVIRONMENT === 'LOCAL'){
  loggerStream = fs.createWriteStream(`data.log`);
}else{
  loggerStream = fs.createWriteStream(`../log/projek01-${moment().format('YYYYMMDDHHmmssSSS')}.log`);
}
// const loggerStream = fs.createWriteStream(`projek01-${moment().format('YYYYMMDDHHmmssSSS')}.log`);

Logger.info = function(msg) {
  var message = `[${moment().format('YYYY-MM-DD HH:mm:ss.SSS')}] [INFO]` + " : " + msg + "\n";
  loggerStream.write(message);
};

Logger.debug = function(msg) {
  var message = `[${moment().format('YYYY-MM-DD HH:mm:ss.SSS')}] [DEBUG]` + " : " + msg + "\n";
  loggerStream.write(message);
};

Logger.error = function(msg) {
  var message = `[${moment().format('YYYY-MM-DD HH:mm:ss.SSS')}] [ERROR]` + " : " + msg + "\n";
  loggerStream.write(message);
};

module.exports = Logger;