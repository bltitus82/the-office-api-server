const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const DefineUser = sequelize.define("user", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userBio: {
        type: DataTypes.TEXT,
    },
    imageURL: {
        type: DataTypes.STRING, 
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = DefineUser;