const { sequelize } = require('../db')
// const { DataTypes } = require('sequelize')

const Episodes = require('./episodes')
const Characters = require('./characters')
const Quotes = require('./quotes')
const User = require('./user')
const Likes = require('./likes')

User.belongsToMany(Quotes, { through: Likes, as: 'Likee' });
Quotes.belongsToMany(User, { through: Likes, as: 'Liker' });

Characters.hasMany(Quotes);
Quotes.belongsTo(Characters);

Episodes.hasMany(Quotes);
Quotes.belongsTo(Episodes);

// sequelize.sync({ alter: true })

module.exports = {
    Characters,
    Episodes,
    Quotes,
    User,
    Likes
}