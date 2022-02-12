const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (sqlite)
const db = new Sequelize('coingast', 'root', 'root123', {
    host: 'localhost',
    operatorsAliases: false,
    port: '3308', 
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: false
    },
    dialect: 'mariadb'
  });

  module.exports = db;