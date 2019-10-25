'use strict';
const Sequelize = require('sequelize');
const settings = require('../setting').mysql;
const logger = require('./logger');
const Op = Sequelize.Op;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};

const sequelize = new Sequelize('d5gjlaspm19abo', 'qrvdwidncasrlz', '75c3c4ef2549b9db1a7f68a1ea3fd85c31b05ab3efb17c8423124a33ef31341a', {
  operatorsAliases,
  host: 'ec2-107-21-126-201.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
  pool: {
    max: 3000,
    min: 0,
    acquire: 30000,
    idle: 30000,
    idleTimeoutMillis: 3000,
    evict: 30000
  }
});

sequelize.authenticate()
  .then(() => {
    logger.debug('Connection has been established successfully.');
  })
  .catch(err => {
    logger.error('Unable to connect to the database:', err);
  });

module.exports = {
  Sequelize: sequelize
}