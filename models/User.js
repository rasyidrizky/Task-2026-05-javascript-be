const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true,
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        freezeTableName: true
    }
);

module.exports = User;