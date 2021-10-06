const { sequelize } = require('../db')
const { DataTypes } = require('sequelize')

const DefineCharacters = require('./characters')
const DefineEpisodes = require('./episodes')
const DefineQuotes = require('./quotes')
const DefineUser = require('./user')
const DefineLikes = require('./likes')

const Characters = DefineCharacters(sequelize, DataTypes)
const Episodes = DefineEpisodes(sequelize, DataTypes)
const Quotes = DefineQuotes(sequelize, DataTypes)
const User = DefineUser(sequelize, DataTypes)
const Likes = DefineLikes(sequelize, DataTypes)

User.belongsToMany(Quotes, { through: Likes, as: 'Likee' });
Quotes.belongsToMany(User, { through: Likes, as: 'Liker' });

Characters.hasMany(Quotes);
Quotes.belongsTo(Characters);

Episodes.hasMany(Quotes);
Quotes.belongsTo(Episodes);

sequelize.sync({ alter: true })

module.exports = {
    Characters,
    Episodes,
    Quotes,
    User,
    Likes
}