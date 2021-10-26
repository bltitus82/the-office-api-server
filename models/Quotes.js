const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const DefineQuotes = sequelize.define("quotes", {
    quote: {
        type: DataTypes.STRING(6000),
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    public: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = DefineQuotes;