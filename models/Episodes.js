const DefineEpisodes = (sequelize, DataTypes) => {
const Episodes = sequelize.define("Episodes", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    airDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    season: {
        type: DataTypes.NUMBER,
        allowNull: false
    }, 
    epNumber: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
return Episodes
};

module.exports = DefineEpisodes;