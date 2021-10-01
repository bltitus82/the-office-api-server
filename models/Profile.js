const DefineProfile = (sequelize, DataTypes) => {
const profile = sequelize.define("profile", {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userBio: {
        type: DataTypes.TEXT,
    },
    imageURL: {
        type: DataTypes.STRING, 
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})
return profile
};

module.exports = DefineProfile;