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
        modelName: 'User',     // Nama model untuk digunakan di dalam kode JavaScript
        tableName: 'users',     // Nama tabel spesifik di dalam PostgreSQL
        freezeTableName: true  // Mencegah Sequelize menambahkan huruf 's' di akhir nama tabel
    }
);

module.exports = User;