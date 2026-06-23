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
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        }
    },
    {
        sequelize,
        modelName: 'user',
    }
);

module.exports = User;