

const Episodes = sequelize.define("Episodes", {
    title: {
        type: DataTypes.STRING
    },
    airDate: {
        type: DataTypes.DATE
    },
    season: {
        type: DataTypes.NUMBER
    }, 
    epNumber: {
        type: DataTypes.NUMBER
    },
    writtenBy: {
        type: DataTypes.STRING
    },
    synopsis: {
        type: DataTypes.STRING
    },
})