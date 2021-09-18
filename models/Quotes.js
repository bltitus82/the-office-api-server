const Quotes = sequelize.define("Quotes", {
    quote: {
        type: DataTypes.STRING
    },
    likes: {
        type: DataTypes.NUMBER
    }
});