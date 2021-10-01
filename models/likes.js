const DefineLikes = (sequelize, DataTypes) => {
    const likes = sequelize.define("likes", {
    profileId: {
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