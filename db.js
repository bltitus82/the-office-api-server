// require('dotenv').config();

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize(
//     process.env.DATABASE_URL, 
//     // `postgresql://postgres:${encodeURIComponent(process.env.DB_PASS)}@localhost/the-office-api`,
//     {
//         dialect: 'postgres',
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false, // very important
//             }
//         }
//     }
// );

// module.exports = {
//     sequelize
// };

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: !process.env.DATABASE_URL.includes("localhost")
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false, // fixing unhandled rejection
        },
      }
    : {},
});

module.exports = sequelize;