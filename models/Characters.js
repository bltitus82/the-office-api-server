const DefineCharacters = (sequelize, DataTypes) => {
    const Characters = sequelize.define("characters", {
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

return Characters
};

module.exports = DefineCharacters;