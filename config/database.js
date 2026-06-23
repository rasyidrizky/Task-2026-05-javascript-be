const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('task_db', 'postgres', 'Witherboss', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;