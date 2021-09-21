const { sequelize } = require('../db')
const { DataTypes } = require('sequelize')

const DefineCharacters = require('./characters')
const DefineEpisodes = require('./episodes')
const DefineProfile = require('./profile')
const DefineQuotes = require('./quotes')
const DefineUser = require('./user')

const Characters = DefineCharacters(sequelize, DataTypes)
const Episodes = DefineEpisodes(sequelize, DataTypes)
const Profile = DefineProfile(sequelize, DataTypes)
const Quotes = DefineQuotes(sequelize, DataTypes)
const User = DefineUser(sequelize, DataTypes)

User.hasOne(Profile, {
    onDelete: "CASCADE"
});
Profile.belongsTo(User);

User.belongsToMany(Quotes, { through: "likes", as: "Liker" });
Quotes.belongsToMany(User, { through: "likes", as: "Likee" });

Characters.hasMany(Quotes);
Quotes.belongsTo(Characters);

Episodes.hasMany(Quotes);
Quotes.belongsTo(Episodes);

Quotes.belongsToMany(Characters, { through: 'charQuotes', as: 'Said' });
Characters.belongsToMany(Quotes, { through: 'charQuotes', as: 'Sayer' });

sequelize.sync({ alter: true })


module.exports = {
    Characters,
    Episodes,
    Profile,
    Quotes,
    User
}