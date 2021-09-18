const Characters = sequelize.define("Characters", {
    charName: {
        type: DataTypes.STRING
    }, 
    job: {
        type: DataTypes.STRING
    }, 
    actorName: {
        type: DataTypes.STRING
    }, 
    picture: {
        type: DataTypes.STRING
    }
});