const DefineLikes = (sequelize, DataTypes) => {
    const likes = sequelize.define("likes", {
    userId: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    quoteId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

return likes
};

module.exports = DefineLikes;