const Profile = sequelize.define("Profile", {
    userName: {
        type: DataTypes.STRING
    },
    userBio: {
        type: DataTypes.TEXT
    },
    imageURL: {
        type: DataTypes.STRING
    },
    admin: {
        type: DataTypes.BOOLEAN
    }
});