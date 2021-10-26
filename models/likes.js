const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const DefineLikes = sequelize.define("likes", {
    userId: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    quoteId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = DefineLikes;