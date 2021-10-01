const DefineQuotes = (sequelize, DataTypes) => {
const quotes = sequelize.define("quotes", {
    quote: {
        type: DataTypes.STRING(6000),
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})
return quotes
};

module.exports = DefineQuotes;