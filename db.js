require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_URL ||
    `postgresql://postgres:${encodeURIComponent(process.env.DB_PASS)}@localhost/the-office-api`,
    {
        dialect: 'postgres',
    }
);

module.exports = {
    sequelize
};