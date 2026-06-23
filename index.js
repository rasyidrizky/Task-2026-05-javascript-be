const express = require('express');
const app = express();
const port = 5000;

const sequelize = require('./config/database.js');

async function db_connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');

        await sequelize.sync();
        console.log('Database has been synced');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

db_connect();