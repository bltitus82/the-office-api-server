const DefineQuotes = (sequelize, DataTypes) => {
const quotes = sequelize.define("quotes", {
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
return quotes
};

module.exports = DefineQuotes;