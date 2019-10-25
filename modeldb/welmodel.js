const Sequelize = require('sequelize');
const dbConnection = require('../config/db').Sequelize;

const AdrProd = dbConnection.define('microvice', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  type: Sequelize.STRING
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'microvice'
});

module.exports = AdrProd;