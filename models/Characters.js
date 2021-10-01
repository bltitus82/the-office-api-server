const DefineCharacters = (sequelize, DataTypes) => {
    const characters = sequelize.define("characters", {
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

return characters
};

module.exports = DefineCharacters;