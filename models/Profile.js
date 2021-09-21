const DefineCharacters = require("./characters");

const DefineProfile = (sequelize, DataTypes) => {
const Profile = sequelize.define("Profile", {
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
    }
})
return Profile
};

module.exports = DefineCharacters;