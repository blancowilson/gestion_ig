const Sequelize = require('sequelize');

const db = require('../config/db');

const Registros = db.define('registros', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    tipo: Sequelize.INTEGER,
    fecha: Sequelize.DATEONLY,
    hora: Sequelize.TIME
    
});

module.exports = Registros