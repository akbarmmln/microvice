const Sequelize = require('sequelize');
const dbConnection = require('../config/db').Sequelize;

const AdrProd = dbConnection.define('product', {
  product_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  id_person: Sequelize.STRING,
  product_name: Sequelize.STRING,
  product_price: Sequelize.INTEGER
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'product'
});

module.exports = AdrProd;