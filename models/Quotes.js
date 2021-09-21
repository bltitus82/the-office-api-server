const DefineQuotes = (sequelize, DataTypes) => {
const Quotes = sequelize.define("Quotes", {
    quote: {
        type: DataTypes.STRING,
        allowNull: false
    },
    likes: {
        type: DataTypes.NUMBER
    }
})
return Quotes
};

module.exports = DefineQuotes;