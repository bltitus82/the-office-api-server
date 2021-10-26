const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const DefineCharacters = sequelize.define("characters", {
    charName: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true
    }, 
    job: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    actorName: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    picture: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = DefineCharacters;