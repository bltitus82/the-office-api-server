const DefineEpisodes = (sequelize, DataTypes) => {
const episodes = sequelize.define("episodes", {
    title: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    airDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    season: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    epNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.STRING(5000),
        allowNull: false
    },
})
return episodes
};

module.exports = DefineEpisodes;