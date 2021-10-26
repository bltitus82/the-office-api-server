require('dotenv').config();

const Express = require('express')
const app = Express()
let cors = require('cors');
app.use(require('./middleware/headers'));
const {sequelize} = require('./db')

const controllers = require('./controllers/index')

app.use(Express.json())

app.use('/user', cors(), controllers.userC)
app.use('/characters', cors(), controllers.charactersC)
app.use('/episodes', cors(), controllers.episodesC)
app.use('/quotes', cors(), controllers.quotesC)
app.use('/likes', cors(), controllers.likesC)

sequelize.authenticate()
    // .then(() => sequelize.sync())
    .then(() => sequelize.sync({force: true}))
    .then(() => {
        app.listen(process.env.PORT, () => { console.log(`[server]: listening on localhost:${process.env.PORT}`)
    })
    })
    .catch((err) => {
        console.log('{server]: Server Crashed')
        console.log(err)
    })