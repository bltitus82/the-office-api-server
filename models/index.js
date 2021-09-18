const Characters = require('./Characters')
const Episodes = require('./Episodes')
const Profile = require('./Profile')
const Quotes = require('./Quotes')
const User = require('./User')

User.hasOne(Profile, {
    onDelete: "CASCADE"
});
Profile.belongsTo(User);

// User.belongsToMany(Quotes, { through: "Fav_Quotes", as: "Liker" });
// Quotes.belongsToMany(User, { through: "Fav_Quotes", as: "Likee" });

// Quotes.belongsTo(User, { through: "Created_By", as: "Creation" });
// User.belongsToMany(Quotes, { through: "Created_By", as: "Creator" });

// Quotes.belongsTo(Characters);
// Characters.hasMany(Quotes);

module.exports = {
    Characters,
    Episodes,
    Profile,
    Quotes,
    User
}