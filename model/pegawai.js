const Sequelize = require('sequelize');
const dbConnection = require('../config/db').Sequelize;

const AdrPegawai = dbConnection.define('pegawai', {
  pegawai_id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  pegawai_nama: Sequelize.STRING,
  pegawai_gaji: Sequelize.STRING,
  nik: Sequelize.STRING
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'pegawai'
});

module.exports = AdrPegawai;